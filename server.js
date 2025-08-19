import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/userRoute.js';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
const dbuser = encodeURIComponent(process.env.DBUSER);
const dbpass = encodeURIComponent(process.env.DBPASS);

mongoose.connect(`mongodb+srv://${dbuser}:${dbpass}@cluster0.ucggsmz.mongodb.net/hara?retryWrites=true&w=majority&appName=Cluster0
`).then(() => {
  app.listen(8000, () => {
    console.log("Server started");
  });
});

// mongoose.connect('mongodb://Localhost:27017/hara').then(() => {
// app.listen(3000,()=>{
//     console.log("server started");
// })
// })
// app.use(express.json());

app.use('/api/users', userRoutes);


