// // // // // // // // // // console.log("a");
// // // // // // // // // // console.log("b");

// // // // // // // // // // for(let i=0;i<=50000000000000000000000;i++){

// // // // // // // // // // }

// // // // // // // // // // console.log("c");


// // // // // // // // // // // sync operation 
// // // // // // // // // // // blocking
// // // // // // // // // // //asyc operation

// // // // // // // // // // callback function


// // // // // // // // // function party(cb){
// // // // // // // // //     cb()
// // // // // // // // //     console.log("party")
// // // // // // // // // }


// // // // // // // // // function result(){
// // // // // // // // //     console.log("test passed")
// // // // // // // // // }
// // // // // // // // // party(result)

// // // // // // // // // function score(){
// // // // // // // // //     console.log("score")
// // // // // // // // // }

// // // // // // // // // party(score)


// // // // // // // // function abc(cb){
// // // // // // // // cb()
// // // // // // // // }

// // // // // // // // // abc(function(){
// // // // // // // // //     console.log("hello")
// // // // // // // // // })

// // // // // // // // abc(()=>{
// // // // // // // //     console.log("arrow function")
// // // // // // // // })



// // // // // // // // setTimeout(cb,1000)
// // // // // // // // setTimeout(()=>{
// // // // // // // //     console.log("hello i will print after 5 sec")
// // // // // // // // },5000)
// // // // // // // let btn=document.querySelector("button")
// // // // // // // console.log("task a")
// // // // // // // function abc(){
// // // // // // //     console.log("2 sec ")
// // // // // // // }


// // // // // // // let reference1=setTimeout(abc,2000)

// // // // // // // let reference2=setTimeout(()=>{
// // // // // // //     console.log("zero second")
// // // // // // // },5000)
// // // // // // // console.log("task d")

// // // // // // // // console.log(reference1,reference2)
// // // // // // // btn.addEventListener("click",()=>{
// // // // // // // clearTimeout(reference1)

// // // // // // // })



// // // // // // //========setInterval


// // // // // // let ref=setInterval(()=>{
// // // // // // console.log("alarm rings after 1 sec")

// // // // // // },1000)


// // // // // // // btn.addEventListener("click",()=>{
// // // // // // // clearInterval(ref)

// // // // // // // })


// // // // // // console.log("hello")
// // // // // // clearInterval(ref)


// // // // // // let date=new Date();
// // // // // // let min=date.getMinutes();
// // // // // // console.log(min)



// // // // // console.log("a")
// // // // // console.log("b")
// // // // // setTimeout(()=>{
// // // // //     console.log("c")
// // // // // },6000)

// // // // // setInterval(()=>{
// // // // //     console.log("d")
// // // // // },2000)

// // // // // console.log("e")



// // // // // for(let i =0;i<=10;i++){
// // // // //     setTimeout(()=>{
// // // // //         console.log("hello")
// // // // //     },3000)
// // // // // }


// // // // // callback function jo ki first parameter lega error second data\


// // // // function result(cb){
// // // //     if(true){
// // // //         callback(null,"data")
// // // //     }else{
// // // //      callback("somethiong went wrong",null)
// // // //     }
// // // // }

// // // // function callback(err,data){
// // // //     if(err){
// // // //         console.log(err);
// // // //         return;
// // // //     }
// // // //     console.log(data)
// // // // }


// // // // result(callback)



// // // setTimeout(() => {
// // //     console.log("a")
// // //     setTimeout(() => {
// // //         console.log("b")
// // //         setTimeout(() => {
// // //             console.log("c")
// // //             setTimeout(() => {
// // //                 console.log("d")
// // //                 setTimeout(() => {
// // //                     console.log("e")
// // //                     setTimeout(() => {
// // //                         console.log("f")
// // //                         setTimeout(() => {
// // //                             console.log("g")

// // //                         }, 1000)
// // //                     }, 1000)
// // //                 }, 1000)
// // //             }, 1000)
// // //         }, 1000)
// // //     }, 1000)
// // // }, 1000)



// // // // user data get. 
// // // //{
// // // // name:"user",
// // // // id:1,
// // // // city
// // // // }
// // // // get out the order of the user.  

// // // // make. payment 
// // // // order successfull


// // // // get user

// // // //  // order (user)

// // // //  // make payment(order , user)

// // // //  //



// // // function getUser(cb){
// // // setTimeout(()=>{
// // // let user={
// // //     name:"ak",
// // //     id:1
// // // }
// // //     cb(user,order)
// // // })
// // // }






// // function getUser(cb) {

// //     setTimeout(() => {
// //         let user = {
// //             name: "ak",
// //             id: 1
// //         }
// //         cb(user)
// //     }, 1000)

// // }



// // function getOrders(user, cb) {

// //     setTimeout(() => {
// //         let orders = [{
// //             name: "shirt"
// //         },
// //         {
// //             name: "pants"
// //         }]
// //         cb(user, orders)
// //     }, 4000);
// // }
// // function getPayment(user, order, cb) {
// //     setTimeout(() => {
// //         let paymentid = "jhjgfgfgukhlkgjsdf"
// //         cb(user, order, paymentid)
// //     },6000)
// // }

// // getUser((user) => {
// //     console.log("this is user data", user)
// //     getOrders(user,(user, orders) => {
// //         console.log("this is the orders by ", user, "orders are", orders)
// //         getPayment(user,orders,(user, order, paymentid) => {
// //             console.log("payment done")
// //             console.log(user, order, paymentid)
// //         })

// //     })
// // })

// let usedata={
//     email:"x@gmail.com",
//     pasword:"123asd",
//     role:"trainer"
// }


// user details ayi 
// user detail verify 
// veryify role 
// successfull loged in to the dashboard


let userInput={
    email:"ak@gmail.com",
    password:"demo@123",
    role:"trainer"
}



function userDetails(userInput,callback){

setTimeout(()=>{
    console.log("reading user details....")
    callback(userInput)
})

}


function verifyDetails(userData,callback){

if(userData.email=="ak@gmail.com"){
    callback(null,userData)
}else{
    callback("unAuthorized Email",null)
}

}



userDetails(userInput,(userData)=>{

verifyDetails(userDetails,(msg,data)=>{

    if(msg){
        console.log(msg)
        return;
    }
    

        console.log("email has been verified")
        verifyRole(()=>{

        })

})




})