import express from 'express';

import dormRoutes from './routes/dormRoutes'
import foodRoutes from './routes/foodRoutes';
import reviewRoutes from './routes/reviewRoutes';
import studySpotRoutes from "./routes/studySpotRoutes";
import userRoutes from './routes/userRoutes';

const app = express();

app.use(express.json());

// app.use('/dorms', dormRoutes);
app.use('/food', foodRoutes);
// app.use('/reviews', reviewRoutes);
// app.use('/studyspots', studySpotRoutes);
// app.use('/users', userRoutes);

app.listen(3000);
