import express from 'express';

import { checkRequiredEnvVariables } from '@core/infrastructure/express/env-config.express';
import { setupRouter } from '@features/steup/ui/routes/setup.routes';
import { webhooksRouter } from '@features/webhooks/ui/routes/webhooks.routes';

// Check for required environment variables
const requiredEnvVars = [
    'PORT',
    'GITHUB_WEBHOOK_SECRET'
];

checkRequiredEnvVariables(requiredEnvVars);

const app = express();
const port = process.env['PORT'] ?? 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/setup', setupRouter);
app.use('/webhooks', webhooksRouter);

const server = app.listen(port, () => {
    console.log(`Backend listening on port ${port}`);
});

process.on('SIGINT', () => {
    server.close(() => {
        process.exit(0);
    });
});
