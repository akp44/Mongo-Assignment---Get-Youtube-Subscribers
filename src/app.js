
const express = require('express');
const app = express()
const SubscribeModel = require('./models/subscribers');

// Your code goes here

app.get('/subscribers', async(req,res) => {
    res.send(await SubscribeModel.find());
});

app.get('/subscribers/names', async(req,res) => {
   /* const fullResults = await SubscribeModel.find();
    const mappedResults = fullResults.map(doc => {
        return {
            name: doc.name,
            SubscribeModel: doc.SubscribeModel
        }
    });
    res.send(mappedResults);*/
    const projectedResults = await SubscriberModel.find().select({
    _id:false,
        subscribedDate:false,
        __v:false
    });
     res.send(projectedResults);
});
app.get('/subscribers/:id',(req,res)=>{
    const idToSearch = req.params.id;
    try{
        const doc = await.SubscribeModel.findOne({_id:idToSearch});
        if(doc == null){
            res.status(400).send({message: "Id not found"});
        }else{
            res.send(doc);
        }
    }catch(err){
        res.status(400).send({message: err.message});
    }
})


















module.exports = app;
