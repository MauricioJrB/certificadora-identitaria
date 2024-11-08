import mongoose, { mongo, Schema } from "mongoose";

const PostSchema = new Schema(
  {
    username: {  type: String, required: true },
    amount: { type: Number, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Post", PostSchema);