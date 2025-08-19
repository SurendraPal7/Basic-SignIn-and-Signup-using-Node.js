import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/userRoute.js';
const app = express();
mongoose.connect('mongodb://Localhost:27017/hara').then(() => {
app.listen(3000,()=>{
    console.log("server started");
})
})
app.use(express.json());
app.use('/api/users', userRoutes);


