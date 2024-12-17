import productModel from '../models/Product.js'
import expressValidator from 'validator';
import bdHelpers from '../helpers/bdHelpers.js';

class DoacaoController {
    static DonationPrduct = async (req, res) => {
        const validator = expressValidator;
        const {name, description, date} = req.body;
        
        if(!validator.isLength(name, {min: 5, max: 20})) {
            console.log("Tamanho do nome do produto insuficiente!");
        }
        if(!validator.isAlpha(name) && !validator.isAlpha(description)) {
            console.log("O nome/descrição do produto deve ser apenas uma string!");
        }
        if(!validator.isAlpha(date)) {
            console.log("A data do produto deve ser apenas uma string!");
        }
        try{
            const newProduct = new productModel({
                name: name,
                description: description,
                date: date,
            })

            const savedProduct = await newProduct.save();

            return res.status(200).json(savedProduct);

        } catch(error){
            return res.status(500).json({msg: "An unexpected error occured", error: error.message});
        }
    }

    static getProducts = async (req, res) => {
        try {
            const products = await bdHelpers.getAllProducts();
            console.log(products);
            return res.status(200).json(products);
        } catch (error) {
            return res.status(500).json({msg: "An unexpected error occured", error: error.message});
        }
    }
}

export default DoacaoController;