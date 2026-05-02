import express from 'express';
import { webhooksRouter } from '@features/webhooks/ui/routes/webhooks.routes';

const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/webhooks', webhooksRouter)

app.listen(port, () => {
    console.log(`Backend listening on port ${port}`)
})
