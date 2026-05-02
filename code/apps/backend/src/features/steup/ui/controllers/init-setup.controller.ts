import { type RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';

/**
 * Initialize setup controller
 *
 * @param req Request
 * @param res Response
 */
export const initSetupController: RequestHandler = async (req, res, next) => {
    try {
        res.status(StatusCodes.OK).send({ message: "Setup initialized successfully" });
    } catch (error) {
        next(error);
    }
};
