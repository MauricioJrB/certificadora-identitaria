import mongoose, { mongo, Schema } from "mongoose";

const ProductSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: String, required: true }
  }
);

export default mongoose.model("Product", ProductSchema);