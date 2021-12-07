import { Router } from 'express';

import {
  index,
  createTradeController,
  getTradeController,
  cancelTrade,
} from '@controllers/trade';
import { authenticateUser } from '@middlewares/authorization';

import {
  validateCreateTrade,
  validateGetTrade,
  validateCancelTrade,
  validateSetPaidTrade,
} from '@utils/validators/request/trader';

const router = Router();

router.get('/index', index);

router.post(
  '/create',
  authenticateUser,
  validateCreateTrade,
  createTradeController,
);

router.put('/cancel', authenticateUser, validateCancelTrade, cancelTrade);

router.put('/paid', authenticateUser, validateSetPaidTrade);

router.get(
  '/get/:id',
  // authenticateUser,
  validateGetTrade,
  getTradeController,
);

export default router;
