import { NextResponse } from "next/server";
import Stripe from "stripe";
import UserModel from "../models/User";
import { connectMongoDB } from "../connection/connection";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-10-16",
});
const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(req: Request) {
  const sig = req.headers.get("Stripe-Signature")!;
  const body = await req.text();
  let event;

  try {
    event = stripe.webhooks.constructEvent(body, sig, endpointSecret);
  } catch (err) {
    console.error("Webhook signature verification failed:", err);
    return NextResponse.json({ error: "Webhook signature verification failed" }, { status: 400 });
  }
  // Handle different event types
  try {
    await connectMongoDB();

    switch (event.type) {
      case "checkout.session.completed":
        const session = event.data.object;
        console.log(".......stripe session data", session);
        
// seperate the month in number & save in dataBase
        const durationMonthsString = session.metadata.durationMonths || "";
        const durationMonths = parseInt(durationMonthsString.replace(/\D/g, ""), 10);
        // Ensure that we have a valid number of months
        if (isNaN(durationMonths) || durationMonths <= 0) {
          throw new Error("Invalid durationMonths value");
        }
        const subscriptionDateEnd = new Date();
        subscriptionDateEnd.setMonth(subscriptionDateEnd.getMonth() + durationMonths);


        const userId = session.metadata.userId;
        const savedUser = await UserModel.findByIdAndUpdate(
          userId,
          {
            stripeSubscriptionId: session.subscription,
            planType: session.metadata.planType,
            tutorLevel: session.metadata.tutorLevel,
            durationMonths: session.metadata.durationMonths,
            sessionsPerMonth: session.metadata.sessionsPerMonth,
            subscriptionDateStart: new Date(),
             subscriptionDateEnd:subscriptionDateEnd,
            stripeMonthlyPrice: session.amount_total / 100,
            subscriptionIsActive: true,
          },
          { new: true } 
        );
        console.log("....sub data ", savedUser);
        break;

      case "customer.subscription.deleted":
        // const deletedSession = event.data.object;
        // console.log(".......stripe session data", deletedSession);

        // // Update subscription status in DB
        // const deleteduserId = deletedSession.metadata.userId;
        // await UserModel.findByIdAndUpdate(
        //   deleteduserId,
        //   { stripeSubscriptionId: deletedSession.subscription},
        //   { subscriptionIsActive: false }
        // );
        // break;

      // Handle other events if necessary
      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Error handling webhook event:", error);
    return NextResponse.json({ error: "Webhook handling failed" }, { status: 500 });
  }
}
