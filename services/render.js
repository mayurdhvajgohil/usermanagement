const axios = require("axios")
const { response } = require("express")


exports.homeRoute = (req, res) =>{
    axios.get("http://localhost:2550/api/users")
    .then(function(response){
        // console.log(response)
        // console.log(response.data)
        res.render("home",{users:response.data})
    })
    .catch(err=>{
        res.send(err)
    })

   
}
exports.add_userRoute = (req, res) =>{
    res.render("add_user")
}
exports.edit_userRoute = (req, res) =>{
    axios.get("http://localhost:2550/api/users",{params:{id:req.query.id}})
    .then(function(userdatas){

        res.render("edit_user",{user:userdatas.data})
    })
    .catch(err=>{
        res.send(err)
    })
}