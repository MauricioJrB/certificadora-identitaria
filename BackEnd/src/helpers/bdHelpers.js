import productModel from '../models/Product.js'
import postModel from '../models/Post.js'
import SuperUserModel from '../models/SuperUser.js'

const bdHelpers = {
    getPost: async(name) => {
        const foundPost = await postModel.findOne({name: name});
        return foundPost;
    },
    getAllPost: async() => {
        const allPost = await postModel.find();
        return allPost
    },
    getAllProducts: async() => {
        const allProduct = await productModel.find()
        return allProduct
    },
    getUser: async() =>{
        const allUser = await SuperUserModel.find();
        return allUser
    }
}

export default bdHelpers;