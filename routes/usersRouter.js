const express =require("express");
const router = express.Router();
const bcrypt =require("bcrypt");
const userModel =require("../models/userModel");
const jwt =require("jsonwebtoken");

router.get("/", function(req, res){
    res.send("hey its working");
});
roueter.post("/register", async function (res, res){
   try{
     let { email, password, fullname } =req.body;
     bcrypt.gensalt(10, function(err,salt) {
        bcrypt.hash(password, salt, function(err, hash) {
            if(err) return res.send(err.message);
            else {
                let user =await userModel.create({
                    email,
                    password: hash,
                    fullname,
                });

                let token=jwt.sign({email,id: user._id}, "heyheyhey");
                   res.cookie("token", token);
                   res.send("user created successfully"); 
                }
            
            });
         });
    
}catch (error){
    res.send(err.message);
}
});

module.exports = router;