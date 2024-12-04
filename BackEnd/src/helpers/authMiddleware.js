import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'
dotenv.config();

function validToken(req, res, next){
    const authHeader = req.headers['authorization'];
    if(!authHeader){
        return res.status(401).json({msg: 'Token não encontrado'})
    }
    const token = authHeader && authHeader.split(' ')[1];
    if(!token){
        return res.status(401).json({msg: 'Acesso negado'})
    }
    try{
        const secret = process.env.SECRET;
        jwt.verify(token, secret)
        next()
    }
    catch(error){
        res.status(400).json({msg: 'Token inválido', error: error});
    }
}

export default validToken