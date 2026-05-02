import express from 'express';
import { webhooksRouter } from '@features/webhooks/ui/routes/webhooks.routes';

const app = express()
const port = process.env['PORT'] ?? 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/webhooks', webhooksRouter)

const server = app.listen(port, () => {
    console.log(`Backend listening on port ${port}`)
})

process.on('SIGINT', () => {
    server.close(() => {
        process.exit(0)
    })
})
