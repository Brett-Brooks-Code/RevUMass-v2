import { Router } from 'express';

const router: Router = Router();

router.get('/getstudyspot/:id');
router.get('/getallstudyspots/');

export default router;