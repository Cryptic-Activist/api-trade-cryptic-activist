import { NextFunction, Request, Response } from 'express';
import { CreateTrade } from '../../../middlewares/validators/trades';

export function validateCreateTrade(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { body } = req;
  const validated = CreateTrade.safeParse(body);

  if (validated.success) {
    next();
  } else {
    console.log(validated);
    return res.status(400).send({
      status_code: 400,
      results: {},
      // @ts-ignore
      errors: validated.error,
    });
  }
}

export function validateGetTrade(
  req: Request,
  res: Response,
  next: NextFunction,
): NextFunction | Response {
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

export function validateCancelTrade(
  req: Request,
  res: Response,
  next: NextFunction,
): NextFunction | Response {
  const { id } = req.body;

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

export function validateSetPaidTrade(
  req: Request,
  res: Response,
  next: NextFunction,
): NextFunction | Response {
  const { id } = req.body;

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
