import mongoose, { Document, Schema } from 'mongoose';
export interface IStudent extends Document {
  user: mongoose.Types.ObjectId; 
  levelOfStudy: string;
  grade: string;
  subjects: string[]; 
  personalInformation: {
    country: string;
    city: string;
    streetName: string;
    zipcode: string;
    institution: string;
    age: number;
  };
  additionalInformation: string;
  availability: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
}






const StudentSchema: Schema = new Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  levelOfStudy: { type: String, required: true },
  grade: { type: String, required: true },
  subjects: { type: [String], required: true },
  personalInformation: {
    country: { type: String, required: true },
    city: { type: String, required: true },
    streetName: { type: String, required: true },
    zipcode: { type: String, required: true },
    institution: { type: String, required: true },
    age: { type: Number, required: true }
  },
  additionalInformation: { type: String },
  availability: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phoneNumber: { type: String, required: true },

});








const StudentModel = mongoose.models.Student || mongoose.model<IStudent>('Student', StudentSchema);
export default StudentModel;
