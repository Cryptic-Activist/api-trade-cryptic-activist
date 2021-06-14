import { Router } from 'express';

import { index, createTrade, getTrade, cancelTrade } from '@controllers/trade';
import { authenticateUser } from '@middlewares/authorization';

import {
  validateCreateTrade,
  validateGetTrade,
  validateCancelTrade,
} from '@utils/validators/request/trader';

const router = Router();

router.get('/index', index);

router.post('/create', authenticateUser, validateCreateTrade, createTrade);

router.put('/cancel', authenticateUser, validateCancelTrade, cancelTrade);

router.get('/get/:id',
  // authenticateUser,
  validateGetTrade,
  getTrade);

export default router;
