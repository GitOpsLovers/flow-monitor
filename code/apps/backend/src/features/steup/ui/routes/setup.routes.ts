import { type Router as RouterType, Router } from 'express';

import { initSetupController } from '../controllers/init-setup.controller';

const setupRouter: RouterType = Router();

setupRouter.get('/', initSetupController);

export { setupRouter };
