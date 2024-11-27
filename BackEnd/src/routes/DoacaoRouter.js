import express from 'express';
import DoacaoController from '../controllers/DoacaoController';

const router = express.Router();

router.post("/produto/cadastro", DoacaoController.DonationPrduct);