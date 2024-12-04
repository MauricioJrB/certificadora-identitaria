import express from 'express';
import PontoColetaController from '../controllers/PontoColetaController.js';

const router = express.Router();

router.get("/pontoColeta", PontoColetaController.PontosColetas);
router.post("/pontoColeta", PontoColetaController.NewPontoColeta);

export default router;