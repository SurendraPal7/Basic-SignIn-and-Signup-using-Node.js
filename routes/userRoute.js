import {registerUser} from '../controllers/userController.js';
import express from 'express';
const router = express.Router();
router.post('/register', registerUser);
router.post('/login', loginUser);
import {loginUser} from '../controllers/userController.js';
export default router;



