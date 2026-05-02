import { type Router as RouterType, Router } from 'express';

import { verifyGithubWebhook } from '../middlewares/verify-github-webhook.middleware';

const webhooksRouter: RouterType = Router();

webhooksRouter.get('/', verifyGithubWebhook, (req, res) => {
    res.send('Birds home page');
});

export { webhooksRouter };
