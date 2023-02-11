import { sanitizeInputGetTrade } from '@utils/sanitizer/trade';
import {
  createTrade,
  getTrade,
  safeTradeValuesAssigner,
  updateTrade,
} from 'base-ca';
import { Request, Response } from 'express';

export async function index(req: Request, res: Response): Promise<Response> {
  try {
    console.log(req);
  } catch (err) {
    return res.status(500).send({
      status_code: 500,
      results: {},
      errors: [err.message],
    });
  }
}

export async function createTradeController(
  req: Request,
  res: Response,
): Promise<Response> {
  try {
    const { body } = req;

    const newTrade = await createTrade(body);

    return res.status(200).send({
      status_code: 200,
      results: newTrade,
      errors: [],
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      status_code: 500,
      results: {},
      errors: [err.message],
    });
  }
}

export async function cancelTrade(
  req: Request,
  res: Response,
): Promise<Response> {
  try {
    const { id } = req.body;

    const cleanReqBody = sanitizeInputGetTrade({ id });

    // @ts-ignore
    const trade = await updateTrade(
      // @ts-ignore
      { id: cleanReqBody.id },
      { state: 'canceled', ended_at: new Date() },
    );

    return res.status(200).send({
      status_code: 200,
      results: trade,
      errors: [],
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      status_code: 500,
      results: {},
      errors: [err.message],
    });
  }
}

export async function setPaidTrade(
  req: Request,
  res: Response,
): Promise<Response> {
  try {
    const { id } = req.body;

    const cleanReqBody = sanitizeInputGetTrade({ id });

    // @ts-ignore
    const trade = await updateTrade(
      // @ts-ignore
      { id: cleanReqBody.id },
      { state: 'canceled', ended_at: new Date() },
    );

    return res.status(200).send({
      status_code: 200,
      results: trade,
      errors: [],
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      status_code: 500,
      results: {},
      errors: [err.message],
    });
  }
}

export async function getTradeController(
  req: Request,
  res: Response,
): Promise<Response> {
  try {
    const { id } = req.params;

    const cleanReqBody = sanitizeInputGetTrade({ id });

    // @ts-ignore
    const trade = await getTrade({ id: cleanReqBody.id }, [
      'vendor',
      'trader',
      'offer',
      'cryptocurrency',
      'fiat',
      'chat',
    ]);

    if (!trade) {
      return res.status(204).send({
        status_code: 204,
        results: {},
        errors: [],
      });
    }

    const safeTrade = safeTradeValuesAssigner(trade);

    return res.status(200).send({
      status_code: 200,
      results: safeTrade,
      errors: [],
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      status_code: 500,
      results: {},
      errors: [err.message],
    });
  }
}
