import mongoose from "mongoose";

export interface IMeasureUnit extends mongoose.Document {
  name: string;
  abbreviation: string;
};

const MeasureUnitSchema = new mongoose.Schema<IMeasureUnit>({
  name: {
    type: String,
    required: [true, "Please provide a unit for this measure."],
    unique: true,
  },
    abbreviation: {
        type: String,
        required: [true, "Please provide an abbreviation for this measure."],
        unique: true,
    },
});

export default mongoose.models.MeasureUnit ||
  mongoose.model<IMeasureUnit>("MeasureUnit", MeasureUnitSchema);
