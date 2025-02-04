//Cypress
import express from 'express';
import { resetDatabase } from '../controllers/testController';

const router = express.Router();
router.route('/reset').post(resetDatabase);

export default router;
