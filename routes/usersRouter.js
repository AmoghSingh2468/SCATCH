const express =require("express");
const router = express.Router();

router.get("/", function(req, res){
    res.send("hey its working");
});
roueter.post("/register", async function (res, res){
   try{
     let { email, password, fullname } =req.body;

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