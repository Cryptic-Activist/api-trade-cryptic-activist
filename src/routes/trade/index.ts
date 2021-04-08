import { Router } from 'express';

import { index, createTrade } from '@controllers/trade';
import { authenticateUser } from '@middlewares/authorization';

const router = Router();

router.get('/index', index);

router.post('/create', authenticateUser, createTrade);

export default router;
