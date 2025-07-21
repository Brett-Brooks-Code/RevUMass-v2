import { Request, Response } from 'express';

export const getFood = async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id);
    res.status(200).json({ id: id });
}

export const getAllFood = async (req: Request, res: Response) => {
    res.status(200).json({ message: 'all' })
}
