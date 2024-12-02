import mongoose, { Document, Schema } from 'mongoose';

export interface IParent extends Document {
  user: mongoose.Types.ObjectId;
  gradeLevel: string; 
  grade: string;
  levelOfStudy: string;
  subjectChildNeeds: string[]; 
  additionalInformation: string;
  availability: string;
  
  childInformation: {
    firstName: string;
    lastName: string;
    age: number;
    country: string;
    city: string;
    institution: string;
    streetName: string;
    zipCode: string;
  };
  parentPersonalInformation: {
    country: string;
    city: string;
    streetName: string;
    zipCode: string;
  };
  firstName: string;
  lastName: string;
  phoneNumber: string;
}

const ParentSchema: Schema = new Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  gradeLevel: { type: String},
  grade: { type: String, required: true },
  levelOfStudy: { type: String, required: true },
  subjectChildNeeds: { type: [String], required: true },
  additionalInformation: { type: String },
  availability: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phoneNumber: { type: String, required: true },


  
  childInformation: {
    firstName: { type: String },
    lastName: { type: String },
    age: { type: Number },
    country: { type: String  },
    city: { type: String },
    institution: { type: String },
    streetName: { type: String},
    zipCode: { type: String }
  },
  parentPersonalInformation: {
    country: { type: String  },
    city: { type: String },
    streetName: { type: String  },
    zipCode: { type: String }
  },
 
});

const ParentModel = mongoose.models.Parent || mongoose.model<IParent>('Parent', ParentSchema);
export default ParentModel;
