import { NextResponse } from "next/server";
import Stripe from "stripe";
import { PlanType, TutorLevel } from "../../../../types/Stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-10-16",
});

// Mapping Tutor Levels and Plans to Stripe Price IDs
const PLAN_TUTOR_LEVEL_PRICE_IDS = {
  [PlanType.STANDARD]: {
    [TutorLevel.JUNIOR]: "price_1QKa23CQ4okWkRlLcwaSmjus", // Standard Plan with Junior Tutor
    [TutorLevel.SENIOR]: "price_1QKa8VCQ4okWkRlLWb0Vc7rV", // Standard Plan with Senior Tutor
    [TutorLevel.EXPERT]: "price_1QKa9wCQ4okWkRlLTOwYNn5X", // Standard Plan with Expert Tutor
  },
  [PlanType.PREMIUM]: {
    [TutorLevel.JUNIOR]: "price_1QKZqnCQ4okWkRlL7ut5Q0mc", // Premium Plan with Junior Tutor
    [TutorLevel.SENIOR]: "price_1QKZueCQ4okWkRlL4PM9mRc3", // Premium Plan with Senior Tutor
    [TutorLevel.EXPERT]: "price_1QKZwECQ4okWkRlLcsKcb3AM", // Premium Plan with Expert Tutor
  },
};

export async function POST(req: Request) {
  try {
    const { planType, tutorLevel, durationMonths, userId } = await req.json();

    let sessionsPerMonth;

    if (planType === "standard") {
      sessionsPerMonth = 4;
    } else if (planType === "premium") {
      sessionsPerMonth = 8;
    } else {
      // Handle unexpected planType
      throw new Error("Invalid planType provided"); 
    }
   
    // Get the appropriate price ID based on the plan and tutor level
    //@ts-ignore
    const priceId = PLAN_TUTOR_LEVEL_PRICE_IDS[planType]?.[tutorLevel];

    if (!priceId) {
      return NextResponse.json({ error: "Invalid plan or tutor level" }, { status: 400 });
    }
    // Create the Stripe Checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "subscription",
      line_items: [
        {
          price: priceId, // Use the correct price ID based on plan and tutor level
          quantity: 1,
        },
      ],
      metadata: {
        planType,
        tutorLevel,
        durationMonths,
        userId,
        sessionsPerMonth,
      },
      //   success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/adminparent`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
    });

    return NextResponse.json({ sessionId: session.id });
  } catch (error) {
    console.error("Error creating checkout session:", error);
    return NextResponse.json({ error: "Error creating checkout session" }, { status: 500 });
  }
}