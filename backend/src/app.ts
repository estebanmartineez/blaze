import express, {Request, Response, NextFunction} from 'express';
import teamRoutes from './routes/team.routes';
import dotenv from 'dotenv';
import {sequelize} from './config/database';
import {setModelRelations} from './models/models.util';
import cors from 'cors';
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/teams', teamRoutes);

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error('Error:', err.stack);
  res.status(500).json({message: 'Internal Server Error'});
});

app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Database connection has been established successfully.');
  })
  .catch((err: any) => {
    console.error('Unable to connect to the database:', err);
  });

setModelRelations();

console.log('process.env.PORT', process.env.PORT);
const PORT: number = parseInt(process.env.PORT as string, 10) || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
