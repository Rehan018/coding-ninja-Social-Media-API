import express from 'express';
import { createPost, getAllPosts, deletePost, updatePost, likePost, dislikePost,addCommentToPost,deleteCommentToPost } from '../controllers/post.controller.js';
import authenticationToken from '../middleware/authentication.middleware.js';
import validateInputs from '../middleware/validation.middleware.js';
import upload from '../middleware/file-upload.middleware.js';
const router = express.Router();

router.get('/:userId',authenticationToken, getAllPosts);
router.post('/', authenticationToken,upload.single('file'),validateInputs,createPost)
router.put('/:postId', authenticationToken,validateInputs,updatePost)
router.delete('/:postId', authenticationToken,deletePost);
router.put('/:postId/like', authenticationToken,validateInputs,likePost)
router.put('/:postId/dislike',authenticationToken, validateInputs,dislikePost);
router.post('/:postId/comment',authenticationToken,validateInputs,addCommentToPost);
router.delete('/:postId/comment/:commentId',authenticationToken,validateInputs,deleteCommentToPost);

export default router;
