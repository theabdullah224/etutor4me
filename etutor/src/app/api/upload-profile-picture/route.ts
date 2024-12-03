// import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
// import multer from "multer";
// import multerS3 from "multer-s3";
// import { NextRequest, NextResponse } from "next/server";

// // Initialize AWS S3 client
// const s3 = new S3Client({
//   region: process.env.AWS_REGION,
//   credentials: {
//     accessKeyId: process.env.AWS_ACCESS_KEY!,
//     secretAccessKey: process.env.AWS_SECRET_KEY!,
//   },
// });

// // Multer configuration for uploading to S3
// const upload = multer({
//   storage: multerS3({
//     s3,
//     bucket: process.env.AWS_BUCKET_NAME!,
//     metadata: (req, file, cb) => {
//       cb(null, { fieldName: file.fieldname });
//     },
//     key: (req, file, cb) => {
//       cb(null, `profile-pictures/${Date.now()}_${file.originalname}`);
//     },
//   }),
// });

// // Middleware for single file upload
// const uploadMiddleware = upload.single("profilePicture");

// // Next.js API route handler
// export async function POST(req: NextRequest) {
//   return new Promise((resolve, reject) => {
//     // Create a mock res object for multer
//     const res = {
//       writeHead: (statusCode: number, headers: object) => {},
//       end: (data?: any) => {},
//     };

//     // Log the request body and form data for debugging
//     console.log("Request body:", req.body);  // Logs the incoming body
//     console.log("Request headers:", req.headers);  // Logs request headers

//     // Handling the file upload via multer
//     uploadMiddleware(req as any, res as any, async (err: any) => {
//       if (err) {
//         console.error("Multer error:", err);  // Log multer error
//         reject(NextResponse.json({ error: "File upload failed", details: err }, { status: 500 }));
//       }

//       if ((req as any).file) {
//         const fileUrl = (req as any).file.location;
//         console.log("File uploaded successfully:", fileUrl);  // Log the file URL

//         resolve(
//           NextResponse.json({
//             message: "File uploaded successfully",
//             fileUrl,
//           })
//         );
//       } else {
//         console.error("No file found in request");
//         reject(NextResponse.json({ error: "No file found" }, { status: 500 }));
//       }
//     });
//   });
// }
