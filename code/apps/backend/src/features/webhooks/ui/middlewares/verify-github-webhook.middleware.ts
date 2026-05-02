import { createHmac, timingSafeEqual } from 'crypto'

import { type Request, type Response, type NextFunction } from 'express'

const GITHUB_WEBHOOK_SECRET = process.env.GITHUB_WEBHOOK_SECRET ?? ''

/**
 * Middleware to verify GitHub webhook signatures
 */
export function verifyGithubWebhook(req: Request, res: Response, next: NextFunction): void {
    const signature = req.headers['x-hub-signature-256']

    if (!signature || typeof signature !== 'string') {
        res.status(401).json({ error: 'Missing signature' })
        return
    }

    const hmac = createHmac('sha256', GITHUB_WEBHOOK_SECRET)
    const digest = `sha256=${hmac.update(JSON.stringify(req.body)).digest('hex')}`

    const signatureBuffer = Buffer.from(signature)
    const digestBuffer = Buffer.from(digest)

    if (signatureBuffer.length !== digestBuffer.length || !timingSafeEqual(signatureBuffer, digestBuffer)) {
        res.status(401).json({ error: 'Invalid signature' })
        return
    }

    next()
}
