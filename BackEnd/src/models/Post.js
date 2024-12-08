import mongoose, { mongo, Schema } from "mongoose";

const PostSchema = new Schema(
  {
    username: {  type: String, required: true },
    contribution: { type: Number, required: true },
    timeAgo: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Post", PostSchema);