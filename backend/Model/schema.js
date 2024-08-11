const mongoose = require("mongoose");
const ourSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String

})
const model = mongoose.model("Users", ourSchema)
module.exports=model;
