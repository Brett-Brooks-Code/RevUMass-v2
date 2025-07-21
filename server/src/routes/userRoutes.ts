import { Router } from 'express';

const router: Router = Router();

router.get('/getuser/:id');
router.get('/getallusers/');

export default router;