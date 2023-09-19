import express from 'express';
import { getNeoSlavicVideos } from '../controllers/ytController';

const router = express.Router();

router.route('/neo-slavic-census/:qty').get(getNeoSlavicVideos);

export default router;
