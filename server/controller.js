
let users= require("../models/users")
exports.create = (req,res)=>{
if(!req.body){
    res.status(400).send({message:"cannot be empty"})
    return;
}
const user = new users({
    
        name:req.body.name,
        phone:req.body.phone,
        email:req.body.email,
        // image:req.body.uimage
}
)
user
    .save(user)
    .then(data=>{
        // res.send(data)
        res.redirect("/add")
    })
    .catch(err=>{
        res.status(500).send({
            message:err.message||"err data not saved through creadte method"
        })
    })
}




exports.find = (req,res)=>{
    if(req.query.id){
         const id= req.query.id
         users.findById(id)
         .then(data=>{
            if(!data){
                res.status(400).send({message:err.message ||`data id : ${id}not found`})
            }
            else{
            res.send(data)
            }
        })
        .catch(err=>{
            res.status(500).send({message:err.message||"data not find "})
        })

    }else{
    users.find()
    .then(data=>{
        res.send(data)
    })
    .catch(err=>{
        res.status(500).send({
            message:err.message || "data not find"
        })
    })
}

}

exports.edit = (req,res)=>{
    if(!req.body){
        res.status(400).send({message:"cannot be empty"})
        return;
    }
    const id= req.params.id
    users.findByIdAndUpdate(id, (req.body),{useFindAndMOdify:false})
    .then(data=>{
        if(!data){
            res.status(400).send({message:err.message ||`data id : ${id}not found`})
        }
        else{
            res.redirect(`/edit/${req.params.id}`)
        // res.send(data)
        } 
    })
    .catch(err=>{
        res.status(500).send({message:err.message||"data not updated "})
    })

}

exports.delete = (req,res)=>{
    const id= req.params.id
    users.findByIdAndDelete(id)
    .then(data=>{
        if(!data){
            res.status(400).send({message:err.message ||`data id : ${id}not found`})
        }
        else{
        res.send({message:"deleted id"})
        }
    })
    .catch(err=>{
        res.status(500).send({message:err.message||"data not deleted "})
    })

}

