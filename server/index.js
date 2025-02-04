import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import foodRouter from './routers/foodrouter.js';

// app config
const app = express();
const port = 4000


// middleware
app.use(cors());
app.use(express.json());


//db connect
connectDB();



//API endpoint
app.use('/api/food',foodRouter);
app.use('/images',express.static('uploads'))

app.get("/",(req,res)=>{
    res.send("API WORKING");
})

app.listen(port, () => {
    console.log(`Server is listening at ${port}`);
})
