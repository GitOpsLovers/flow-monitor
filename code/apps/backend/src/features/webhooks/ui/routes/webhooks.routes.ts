import { type Router as RouterType, Router } from 'express'

const webhooksRouter: RouterType = Router()

webhooksRouter.get('/', (req, res) => {
    res.send('Birds home page')
})

export { webhooksRouter }
