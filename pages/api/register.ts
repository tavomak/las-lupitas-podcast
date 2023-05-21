import { NextApiRequest, NextApiResponse } from 'next';
import fetch from 'node-fetch';

interface CaptchaValidationResponse {
  success: boolean;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { body, method } = req;
  const { captcha } = body;

  if (method === 'POST') {
    if (!captcha) {
      return res.status(422).json({
        message: 'Unprocessable request, please provide the required fields',
      });
    }

    try {
      const response = await fetch(
        `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captcha}`,
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
          },
          method: 'POST',
        },
      );
      const captchaValidation: CaptchaValidationResponse = await response
        .json() as CaptchaValidationResponse;
      if (captchaValidation.success) {
        return res.status(200).send('OK');
      }

      return res.status(422).json({
        message: 'Unprocessable request, Invalid captcha code',
      });
    } catch (error) {
      console.log(error);
      return res.status(422).json({ message: 'Something went wrong' });
    }
  }
  return res.status(404).send('Not found');
}
