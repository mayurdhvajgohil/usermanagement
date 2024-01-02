const express = require("express");
const axios = require("axios")
const router = express.Router();
const users = require("../models/users")
const services = require("../services/render")
const controller =require("../server/controller")





// click / , /edit and /add go to that pages forms through render file


router.get("/",services.homeRoute)


router.get("/add",services.add_userRoute)


router.get("/edit",services.edit_userRoute)




// api from controllers

router.post("/api/users",controller.create)

router.get("/api/users",controller.find)

router.put("/api/users/:id",controller.edit)

router.delete("/api/users/:id",controller.edit)
    















module.exports = router



























































































































// router.get("/", (req,res)=>{
//     axios.get("http://localhost:2550/users")
//     .then(function(resp){
//         // console.log(resp)
//         res.render("home", {users: resp.data,title:"home page"});
//     })
// .catch(err=>{
//    res.send(err)
// })

// });

// // router.put("/update_user/:id",(req,res)=>{
// //     axios.get("http://localhost:2550/users",{param:{id:req.params.id}})
// //     .then(newdata=>{
// //         res.render("/update_user",{users:newdata.data})
// //     })
// //     .catch(err=>{
// //         res.send(err)
// //     })
   

// // })

















// // data get from server
// router.get("/add", (req,res)=>{
//     res.render("add",{title:"add user"});

// });




// // data get from user

// router.post("/add",(req,res)=>{
//     if(!req.body){
//         res.status(400).send({message: "empty data"});
//         return;
//     }
    
//     const user = new users({
//         name:req.body.uname,
//         phone:req.body.pnumber,
//         email:req.body.email_id,
//         // image:req..uimage



//     })
//     user    
//     .save(user)
//     .then(data=>{
//         // res.send(data)
//         res.redirect('/add')
        
//     })
//     .catch(err=>{
//         res.status(500).send({
//             message:err.message || "something error "
//         })
//     })


//     // res.redirect("/add")

//     })
//     // 2nd find id

//     router.get("/edit/:id", (req,res)=>{
//         if(req.query.id){
//             const id=req.query.id;
//             users.findById(id)
//             .then(data=>{
//                 if(!data){
//                     res.status(404).send({message:"Not found user with id "+id})
//                 }
//                 else{
//                     res.send(data)
//                 }
//             })
//             .catch(err=>{
//                 res.status(500).send({message:"Error retrieving user with id "+id})
//             })
//         }
//         else{
//             users.find()
//             .then(user=>{
//                 res.send(user)
//             })
//             .catch(err=>{
//                 res.status(500).send({message:err.message|| "Error occured while retrieving user information"})
//             })
//         }
            
//         }
//     )
















// // 3 step  update user data how update works new onee

// router.get("/users/:id",async (req,res, next)=>
// {
// console.log(req.params.id)


// try{
//      await users.findByIdAndUpdate({_id:req.params.id},req.body,{new:true},(err,docs)=>{
//         if(err){
//             console.log("not fetch")
//         }
//         else{
//             res.render("edit",{title:"edit"}
//             ,{
//                 users:docs
//             })
//         }
//     })
// }
// catch(err){
// res.send(err)
// }}
//  )
//     // .then(newdata=>

//     //     res.render("update_user",{
//     //         title:"edit user",
//     //         users:newdata
//     //     })

//     // )
//     // .catch(err=>{
//     // res.status(500).send({message:err.message || "find not match"})
//     // })
//     // })




// // res.redirect("/update_user")





//     // find and retrieve user

//     router.get("/users",(req,res)=>{
//         users.find()
//         .then(user=>{
//             res.send(user)
//         })
//         .catch(err=>{
//             res.err(500).send({message:err.message || "find not match"})
//         })
//     })
      





//     router.post("/users/:id",(req,res)=>{
//         if(!req.body){
//             return res.status(400).send({message:err.message || "not data to update"})
//         }
//         const id = req.params.id;
//         users.findByIdAndUpdate(id,{
//             name:req.body.uname,
//             phone:req.body.pnumber,
//             email:req.body.email_id,
//         })
//         .then(data=>{
//             if(!data){
//                 res.status(400).send({message:"data not upda"})
//                 return
//             }
//             else{

//                 res.send(data)
//             }
            
//         })

//         .catch(err=>{
//             res.status(500).send({message:err.message || "not work"})
//         })
//         // res.redirect("/")
//     })

//     // del

// router.delete("/delete/:id",(req,res)=>{

//     const id=req.params.id
// users.findByIdAndRemove(id)
// .then(data=>{
//     if(!data){
//         res.status(404).send({message:"Cannot delete with id ${id}, Maybe id is wrong"})
//     }
//     else{
//         res.send({
//             message:"User was deleted successfully"
//         })
//     }
// })
// .catch(err=>{
//     res.status(500).send({
//         message:"Could not delete user with id ="+id
//     })
// }
// )

// }


// )










module.exports = router;