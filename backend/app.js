const express= require('express');
const app=express();
const dotenv=require('dotenv');
const path=require('path')
const products=require('./router/product')
const order=require('./router/order')
const connectdb=require('./config/connectDatabase');
const exp = require('constants');
const cors=require('cors');

dotenv.config({path:path.join(__dirname,'config','config.env')})


connectdb();
app.use(express.json())
app.use(cors());
app.use('/api/v1/',products)
app.use('/api/v1/',order)


app.listen(8000, ()=>{
    console.log(`server listening to port ${process.env.PORT}  in ${process.env.NODE_ENV}`)
});