const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
   
    name: {
        type:"string",
        require:true
    },
    email: {
        type:"string",
        require:true
    },
    phone: {
        type:"string",
        require:true
    },
    image: {
        type:"string",
        require:true
    },
    created: {
        type:"date",
        require:true,
        default: Date.now
    }
}
)



module.exports= mongoose.model("users", userSchema)