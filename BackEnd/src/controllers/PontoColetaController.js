import pontoColetaModel from '../models/PontoColeta.js'
import bdHelpers from '../helpers/bdHelpers.js';

class PontoColetaController {
    static PontosColetas = async (req, res) => {
        try{
            const pontosColetasFound = await bdHelpers.getAllPontoColeta();
            return res.status(200).json({
                pontosDeColeta: pontosColetasFound
            })
        }
        catch(error){
            return res.status(400).json({msg: "Não foi possível cadastrar um novo ponto de coleta"})
        }
    }   
    
    static NewPontoColeta = async (req, res) => {
        const {cidade, bairro, rua, numero, complemento, cep} = req.body

        try{
            const pontoColeta = new pontoColetaModel({
                Cidade: cidade,
                Bairro: bairro,
                Rua: rua,
                Numero: numero,
                Complemento: complemento,
                CEP: cep
            })
            const savedPontoColeta = await pontoColeta.save()
            return res.status(201).json(savedPontoColeta);
        } catch(error){
            return res.status(500).json({ msg: "Error creating new ponto coleta", error: error.message })
        }
    }
}

export default PontoColetaController;