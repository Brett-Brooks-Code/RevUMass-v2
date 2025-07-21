import { Router } from 'express';

const router: Router = Router();

router.get('/getreview/:id');
router.get('/getreviewsforreviewable/:reviewable');

export default router;