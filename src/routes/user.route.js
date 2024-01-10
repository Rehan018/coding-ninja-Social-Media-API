import express from 'express';
import { updateUser, deleteUser, getUser, followUser, unfollowUser } from '../controllers/user.controller.js';
import authenticationToken from '../middleware/authentication.middleware.js';
import validateInputs from '../middleware/validation.middleware.js';
const router = express.Router();

router.get('/:userId', authenticationToken,getUser)
router.put('/:userId', authenticationToken,validateInputs,updateUser)
router.delete('/:userId',authenticationToken, deleteUser);
router.put('/:userId/follow',authenticationToken, validateInputs,followUser)
router.put('/:userId/follow',authenticationToken, validateInputs, unfollowUser);

export default router;
