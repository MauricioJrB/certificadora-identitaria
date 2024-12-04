import express from 'express';
import DoacaoController from '../controllers/DoacaoController.js';

const router = express.Router();

router.post("/produto/cadastro", DoacaoController.DonationPrduct);

export default router;