const express =require("express");
const router = express.Router();

if(process.env.NODE_ENV === "development"){
    router.get("/", async function(req, res){
        let owners = await owmerModel.find();
        if(owners.length > 0){
            return res.status(503).send("you dont have permission to create a new owner")
        }
        let {fullname, email, password} = req.body;
        let createdowner = await ownerModel.create({
            fullname,            
            email,
            password,
            
        });
    res.status(201).send (CreatedOwner);
    });
}


router.get("/", function(req, res){
    res.send("hey its working");
});


module.exports = router;