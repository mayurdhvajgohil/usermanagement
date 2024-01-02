
$("#add_user").submit(function(event){
    alert("data saved")
})

$("#edit_userid").submit(function(event){
    event.preventDefault();


    let newupdate = $(this).serializeArray();
    console.log(newupdate)
// let data={}
// $.map(newupdate,function(n,i){
//     data[n['name']=n['value']]
// })
// console.log(data);
// let reque = {
//     "url":`http://localhost:2550/api/users/${data.id}`,
//     "method":"PUT",
//     "data":data
// }
// $.ajax(reque).done(function(re){
//   alert("update sucessfully")
// })

})


if(window.location.pathname=="/"){
    $ondelete=$(".tamin tbody td li a.del")
    $ondelete.click(function(){
        let id = $(this).attr("data-id")
        let reque = {
            "uri":`http://localhost:2550/api/users/${data.id}`,
            "method":"DELETE",
            
        }
        if(confirm("do u want delete??")){
            $.ajax(reque).done(function(re){
                alert("dele sucessfully")
              })
        }
    })
}


