import mongoose, { Schema } from "mongoose";
const SuperUserSchema = new Schema(
  {
    email: { type: String, required: true },
    password: { type: String, required: true },
  }
);

export default mongoose.model("SuperUser", SuperUserSchema);