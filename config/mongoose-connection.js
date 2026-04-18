const mongoose = require('mongoose');
const config = require("config");
const dbgr = require("debug")("development:mongoose-connection");
mongoose
.connect(`${config.get("MONGODB_URL")}/scatch`)
.then(function(){
    dbgr("Connected to MongoDB");
})
.catch(function(err){
    dbgr("Error connecting to MongoDB", err);
});
module.exports = mongoose.connection;