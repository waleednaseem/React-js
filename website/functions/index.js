const functions = require('firebase-functions');
const express= require('express');
const cors =require('cors');
const stripe=require('stripe')('sk_test_51H9tNJKZ7OXOzKt6OGqtCltYEGTb8hrSgTQmr6DXMsfThDai0drFSau7nMgUnwgW8D3gBMFqbs1SiOV3w6y24qMB00n30daqSX');


const app=express();

app.use(cors({origin:true}));
app.use(express.json());

app.get('/',(request,res) =>
    res.status(200).send('hello world')
);
app.post('/patments/create',async (request , res)=>{
    const total=request.query.total;
    console.log('Booom payment recieved succesfully',total);
    const paymentIntent=await stripe.paymentIntents.create({
        amount: total,
        currency: 'usd'
    });
    res.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
});
exports.api =functions.https.onRequest(app)