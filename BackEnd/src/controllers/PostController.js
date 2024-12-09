import bdHelpers from "../helpers/bdHelpers.js";

class PostController {
    static getPosts = async(req, res) => {
        try{
            const posts = await bdHelpers.getAllPost();
            return res.status(200).json({
                posts: posts
            });
        }catch(e){
            return res.status(400).json({
                msg: "Não foi possivel retornar os posts existentes"
            });
        }
    }
}

export default PostController;