import { createHmac, timingSafeEqual } from 'crypto';

import { type RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';

const GITHUB_WEBHOOK_SECRET = process.env.GITHUB_WEBHOOK_SECRET ?? '';

/**
 * Middleware to verify GitHub webhook signatures
 */
export const verifyGithubWebhook: RequestHandler = (req, res, next) => {
    const signature = req.headers['x-hub-signature-256'];

    if (!signature || typeof signature !== 'string') {
        res.status(StatusCodes.UNAUTHORIZED).json({ error: 'Missing signature' });
        return;
    }

    const hmac = createHmac('sha256', GITHUB_WEBHOOK_SECRET);
    const digest = `sha256=${hmac.update(JSON.stringify(req.body)).digest('hex')}`;

    const signatureBuffer = Buffer.from(signature);
    const digestBuffer = Buffer.from(digest);

    if (signatureBuffer.length !== digestBuffer.length || !timingSafeEqual(signatureBuffer, digestBuffer)) {
        res.status(StatusCodes.UNAUTHORIZED).json({ error: 'Invalid signature' });
        return;
    }

    next();
};
