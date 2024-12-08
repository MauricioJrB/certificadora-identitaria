import express from 'express';
import PostController from '../controllers/PostController.js';

const router = express.Router();

router.get('/posts', PostController.getPosts);

export default router;
