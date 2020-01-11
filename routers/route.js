import express from 'express';
import Profile from '../models/user'; 
import bodyParser from 'body-parser';
const route = new express.Router();

route.get('/', async (req,res) => {
    res.send("Welcome!!");
})

route.post('/signup', async (req,res) => {
    console.log(req.body);
    const user = new Profile(req.body);
    try{

        if(Profile.findOne({email:req.body.email})){
            throw new Error("email exits");
        }
        await user.save();
        res.status(200).send("User Signup Successful!!");
    }
    catch(error){
        res.status(500).send(error.message);
    }
});


route.post( '/unsubscribe', async( req,res) => {
    try{
        const user = await Profile.findByCredentials(req.body.email, req.body.password);
        if( !user.subscription)
            res.status(400).send("You are not subscribed!!!");
        else{
            user.subscription = false;
            await user.save();
            res.status(201).send("You are not unsubscribed!! Thank You!!");
        }
    }catch(error){
        res.status(500).send("server error!!");
    }

    
    
});

route.post( '/subscribe', async( req,res) => {
    try{
        const user = await Profile.findByCredentials(req.body.email, req.body.password);
        if( user.subscription)
            res.status(400).send("You are already subscribed!!!");
            else{
                user.subscription = true;
                await user.save();
                res.status(201).send("You will now get the notification to drink water in every 4 hours!!");
            }
        
    }
    catch(error){
        res.status(500).send("server error!!");
    }

    
});

export default route;