import mongoose, { Schema } from "mongoose";

const toduSchema = new Schema(
  {
    title: String,
    description: String,
  },
  {
    timestamps: true,
  }
);

const Toduss = mongoose.models.Toduss || mongoose.model("Toduss", toduSchema);

export default Toduss;
