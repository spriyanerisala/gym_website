import express from 'express';
import { membershipJoiner } from '../controllers/membershipController.js';

const membershipRouter = express.Router();

membershipRouter.post('/join', membershipJoiner);

export default membershipRouter;
