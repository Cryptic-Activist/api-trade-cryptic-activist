import { Request, Response } from 'express';
import { createTrade, updateTrade, getTrade } from 'cryptic-base';
import {
  sanitizeInputCreateTrade,
  sanitizeInputGetTrade,
} from '@utils/sanitizer/trade';

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
    const {
      vendor_id,
      trader_id,
      offer_id,
      cryptocurrency_id,
      fiat_id,
      chat_id,
      cryptocurrency_amount,
      fiat_amount,
    } = req.body;

    const cleanReqBody = sanitizeInputCreateTrade({
      vendor_id,
      trader_id,
      offer_id,
      cryptocurrency_id,
      fiat_id,
      chat_id,
      cryptocurrency_amount,
      fiat_amount,
    });

    const newTrade = await createTrade({
      chat_id: cleanReqBody.chat_id,
      cryptocurrency_id: cleanReqBody.cryptocurrency_id,
      offer_id: cleanReqBody.offer_id,
      state: 'ongoing',
      trader_id: cleanReqBody.trader_id,
      vendor_id: cleanReqBody.vendor_id,
      fiat_id: cleanReqBody.fiat_id,
      cryptocurrency_amount: cleanReqBody.cryptocurrency_amount,
      fiat_amount: cleanReqBody.fiat_amount,
    });

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
    const trade = await getTrade(
      ['vendor', 'offer', 'cryptocurrency', 'chat'],
      { id: cleanReqBody.id },
    );
    // const trade = await getTrade(['offer'], { id: cleanReqBody.id });

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
