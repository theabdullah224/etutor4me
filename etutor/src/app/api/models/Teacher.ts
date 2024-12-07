import mongoose, { Document, Schema } from 'mongoose';

// Define the interface for the Teacher model
export interface ITeacher extends Document {
  user: mongoose.Types.ObjectId;  // Reference to User model
  contactInformation: {
    country: string;
    firstName: string;
    lastName: string;
    zipCode: string;
    email: string;
  };
  education: {
    college: string;
    degree: string;
    major: string;
    graduation: Date;
    school?: string; // Optional field for school name
  };
  experience: {
    hasExperience: boolean;
    tutoringLevel: string[];
    subjectsTutored: string[];
    languages: string[];
    instructionTypes: string[];
    availableHours: string;
    startDate: Date;
    generalAvailability: {
      day: string; // Day of the week
      time: string; // Time available
    }[];
    hasTeachingExperience: boolean;
    is18OrAbove: boolean; // Check if the teacher is 18 or older
  };
  isApproved: boolean; // Approval status for the teacher
}
const TeacherSchema: Schema = new Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },  // Relates to User model
  acceptsTrialSession: { type: Boolean, default: true },
  contactInformation: {
    country: { type: String },
    countryOfresident: { type: String },
    firstName: { type: String, required: true },
    lastName: { type: String },
    zipCode: { type: String },
    phone: { type: String },
    streetname: { type: String },
    shippingAddress: { type: String },
    city: { type: String },
    postcode: { type: String },
    email: { type: String, required: true, unique: true },
  },
  education: {
    college: { type: String, required: true },
    degree: { type: String, required: true },
    major: { type: String, required: true },
    graduation: { type: Date },
    graduationSchool: { type: String },
    graduationCountry: { type: String },
    highestDegree: { type: String },
    school: { type: String },
  },
  DOB: {
    day: { type: String },
    month: { type: String },
    year: { type: String },
  },

  currentJob: { type: String },
  timeZone: { type: String },
  gender: { type: String },
  VideoIntroduction: { type: String },
  aboutyou: { type: String },
  YourEducation: { type: String },

  
  experience: {

    experienceWithSpecialNeedsStudent: { type: [String] },
    tutoringExperience: { type: String },
    internationalExperience: { type: String },
    moreaboutProfessionalExperience: { type: String },
    hasExperience: { type: Boolean, required: true },
    tutoringLevel: { type: [String], required: true },
    subjectsTutored: { type: [String], required: true },
    languages: { type: [String], required: true },
    instructionTypes: { type: [String], required: true },
    availableHours: { type: String, required: true },
    startDate: { type: Date, required: true },
    generalAvailability: {type: Map,of: [String],required: true},
    hasTeachingExperience: { type: Boolean, required: true },
    is18OrAbove: { type: Boolean, required: true }
  },
  bankDetails:{
    accountholder: { type: String },
    IBAN: { type: String },
    BIC: { type: String },
  },
  currentMonthRegularSession: { type: Number, default: 0 },
  currentMonthGroupSession: { type: Number, default: 0 },
  TotalGroupSession: { type: Number, default: 0 },
  TotalRegularSession: { type: Number, default: 0 },
  totalbooking: { type: Number, default: 0 },
  level: { type: Number, default: 1 },
  badge: { type: String, default: "https://cdn4.vectorstock.com/i/1000x1000/85/48/emblem-badge-ribbon-vector-14398548.jpg" },
  EarnedThisMonth: { type: Number, default: 0 },
  EarnedLastMonth: { type: Number, default: 0 },
  TotalEarning: { type: Number, default: 0 },
  isApproved: { type: Boolean, default: true },
}, {
  timestamps: true,
});
// const TeacherModel = mongoose.models.Teacher || mongoose.model<ITeacher>('Teacher', TeacherSchema);
const TeacherModel = mongoose.models.Teacher || mongoose.model<ITeacher>('Teacher', TeacherSchema);

export default TeacherModel;
