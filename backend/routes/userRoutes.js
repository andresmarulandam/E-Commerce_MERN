import express from 'express';
import {
  createUser,
  deleteUser,
  getAllUsers,
  getCurrentUserProfile,
  getUserById,
  loginUser,
  logoutUser,
  updateCurrentUserProfile,
  updateUserById,
} from '../controllers/userController.js';
import {
  authenticate,
  authorizedAdmin,
} from '../middlewares/authMiddleware.js';

const router = express.Router();

router
  .route('/')
  .post(createUser)
  .get(authenticate, authorizedAdmin, getAllUsers);
router.post('/auth', loginUser);
router.post('/logout', logoutUser);

router
  .route('/profile', authenticate, getCurrentUserProfile)
  .put(authenticate, updateCurrentUserProfile);

router
  .route('/:id')
  .delete(authenticate, authorizedAdmin, deleteUser)
  .get(authenticate, getUserById)
  .put(authenticate, updateUserById);
export default router;
