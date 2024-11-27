import productModel from '../models/Product'
import postModel from '../models/Post'
import SuperUserModel from '../models/SuperUser'

module.exports = {
    getPost: async(name) => {
        const foundPost = await postModel.findOne({name: name});
        return foundPost;
    },
    getAllPost: async() => {
        const allPost = await postModel.find();
        return allPost
    },
    getUser: async() =>{
        
    }
}