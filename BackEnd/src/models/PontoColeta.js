import mongoose, { mongo, Schema } from "mongoose";

const PontoColetaSchema = new Schema(
  {
    Cidade: {  type: String, required: true },
    Bairro: {  type: String, required: true },
    Rua: {  type: String, required: true },
    Numero: {  type: Number, required: true },
    Complemento: { type: String, required: false },
    CEP: {type: String, require: false}
  },
  { timestamps: true }
);

export default mongoose.model("PontoColeta", PontoColetaSchema);