// // const email = document.getElementById("email");
// // email.addEventListener("input", () => {
// //     sessionStorage.setItem("email", email.value);
// // });

// // window.addEventListener("load", () => {
// //     email.value = sessionStorage.getItem("email") || "";
// // });

// const theme = document.getElementById("theme");

// document.getElementById("saveTheme")
// .addEventListener("click", () => {

// document.cookie =
// `theme=${theme.value}; max-age=86400`;

// });


// console.log(document.cookie)
// console.log(Date.now() + (10*60*1000),"Date().now() + (10*60*1000)")

const user = {
    name: "akarsh",
    expiry: Date.now() + (1 * 60 * 1000)
}
sessionStorage.setItem("user", JSON.stringify(user))
sessionStorage.setItem("id", "hgfdx");
sessionStorage.setItem("role", "iuyt")
let data = JSON.parse(sessionStorage.getItem("user"));




document.body.addEventListener("click", () => {
    if (data) {
        if (Date.now() > data.expiry) {
            sessionStorage.removeItem("user");

            console.log("session expired")
        } else {
            console.log("welcome to the", data.name)
            sessionStorage.setItem("user", JSON.stringify(user))
        }

    }

})













const EMAIL_DATA = document.getElementById("email")
EMAIL_DATA.addEventListener("input", () => {
})



window.addEventListener("load", () => {
    EMAIL_DATA.value = sessionStorage.getItem("email" || "")
})





//===========cookies==============

const token_value="token data hai!!!";
document.cookie = "userName=Akarsh";
document.cookie = `token=${token_value}`;
document.cookie = "role=admin";

let res= document.cookie;
console.log(res.split(";"),"cookie")


function singleCookiesData(para){


    let cookies=document.cookie.split(";");

    for(let data of cookies){
        let [key,value] = data.trim().split("=");
        // console.log(key,value);
        if(key==para){
            return value;
        }
    }
    return null
}

console.log(singleCookiesData("userName"))

// console.log(JSON.parse(res))




