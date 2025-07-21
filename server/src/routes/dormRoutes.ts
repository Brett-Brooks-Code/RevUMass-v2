import { Router } from 'express';

const router: Router = Router();

router.get('/getdorm/:id');
router.get('/getalldorms/');

export default router;