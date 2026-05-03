const express =require("express");
const router = express.Router();
const bcrypt =require("bcrypt");
const userModel =require("../models/userModel");

router.get("/", function(req, res){
    res.send("hey its working");
});
roueter.post("/register", async function (res, res){
   try{
     let { email, password, fullname } =req.body;
     bcrypt.gensalt(10, function(err,salt) {
        bcrypt.hash(password, salt, function(err, hash) {
            if(err) return res.send(err.message);
            else res.send(hash);
     });
    });

    let user =await userModel.create({
        email,
        password,
        fullname,
    });
   res.send(user);
}
   catch (error){
    res.send(err.message);
   }
});

module.exports = router;