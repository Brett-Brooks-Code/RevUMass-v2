import { Router } from 'express';

import { getFood, getAllFood } from "../controllers/foodController";

const router: Router = Router();

router.get('/getfood/:id', getFood);
router.get('/getallfood/', getAllFood);

export default router;