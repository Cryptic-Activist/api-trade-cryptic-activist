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

export async function createTrade(
  req: Request,
  res: Response,
): Promise<Response> {
  try {
    const { cryptocurrency } = req.body;

    console.log(cryptocurrency);
  } catch (err) {
    return res.status(500).send({
      status_code: 500,
      results: {},
      errors: [err.message],
    });
  }
}
