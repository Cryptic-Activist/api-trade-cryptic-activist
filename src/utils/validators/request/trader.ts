import { Request, Response, NextFunction } from 'express';

export function validateCreateTrade(req: Request, res: Response, next: NextFunction):
 NextFunction | Response {
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

  console.log(req.body);

  const errors: string[] = [];

  if (!vendor_id) {
    errors.push('vendor_id is required.');
  } else if (vendor_id.length === 0) {
    errors.push('vendor_id must be valid.');
  }

  if (!trader_id) {
    errors.push('trader_id is required.');
  } else if (trader_id.length === 0) {
    errors.push('trader_id must be valid.');
  }

  if (!offer_id) {
    errors.push('offer_id is required.');
  } else if (offer_id.length === 0) {
    errors.push('offer_id must be valid.');
  }

  if (!cryptocurrency_id) {
    errors.push('cryptocurrency_id is required.');
  } else if (cryptocurrency_id.length === 0) {
    errors.push('cryptocurrency_id must be valid.');
  }

  if (!fiat_id) {
    errors.push('fiat_id is required.');
  } else if (fiat_id.length === 0) {
    errors.push('fiat_id must be valid.');
  }

  if (!chat_id) {
    errors.push('chat_id is required.');
  } else if (chat_id.length === 0) {
    errors.push('chat_id must be valid.');
  }

  console.log(typeof cryptocurrency_amount);

  if (!cryptocurrency_amount) {
    errors.push('cryptocurrency_amount is required.');
  } else if (typeof cryptocurrency_amount !== 'number') {
    errors.push('cryptocurrency_amount must be valid.');
  }

  if (!fiat_amount) {
    errors.push('fiat_amount is required.');
  } else if (typeof fiat_amount !== 'number') {
    errors.push('fiat_amount must be valid.');
  }

  if (errors.length > 0) {
    return res.status(400).send({
      status_code: 400,
      results: {},
      errors,
    });
  }

  next();
}

export function validateGetTrade(req: Request, res: Response, next: NextFunction):
 NextFunction | Response {
  const { id } = req.params;

  const errors: string[] = [];

  if (!id) {
    errors.push('id is required.');
  } else if (id.length === 0) {
    errors.push('id must be valid.');
  }

  try {
    BigInt(id);
  } catch (err) {
    errors.push('id must be a number.');
  }

  if (errors.length > 0) {
    return res.status(400).send({
      status_code: 400,
      results: {},
      errors,
    });
  }

  next();
}

export function validateCancelTrade(req: Request, res: Response, next: NextFunction):
 NextFunction | Response {
  const { id } = req.params;

  const errors: string[] = [];

  if (!id) {
    errors.push('id is required.');
  } else if (id.length === 0) {
    errors.push('id must be valid.');
  }

  try {
    BigInt(id);
  } catch (err) {
    errors.push('id must be a number.');
  }

  if (errors.length > 0) {
    return res.status(400).send({
      status_code: 400,
      results: {},
      errors,
    });
  }

  next();
}
