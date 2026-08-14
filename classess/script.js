// // // // class
// // // // constructor
// // // //instance method
// // // // get / set method , static method, private fields


// // // class obn21{
// // // constructor(name="Anonymous User",location=null,age=null){
// // // this._name=name;
// // // this._location=location;
// // // this._age=age
// // // }
// // // kuchKare(){ // this is a instance method
// // //     console.log(`Hi my name ${this._name} and im from ${this._location} `)
// // // }

// // // get name(){
// // //     return this._name.toUpperCase()
// // // }


// // // get location(){
// // //     return this._location
// // // }


// // // }

// // // let student1=new obn21("kaushal","Noida");
// // // let student2=new obn21("saurav","Accio");
// // // let student3=new obn21();
// // // console.log(student1.name,student1.location) // both are different
// // // console.log(student2) // both are different
// // // console.log(student3)
// // // student1.kuchKare();
// // // student3.kuchKare();// normally call ker rahe hai.....

// // // // the difference between constructor and instance;

// // // // . Whenever the object creates then automatically constructor gets called;
// // // // instacnce method we have to call normally

// // // // constructor > intialization purpose
// // // // instance > Object ka behaviour

// // // // constructor()
// // // // instance() // it can be any name y because its a instance method we are making.





// // // example of getter in class....

// // class Data{
// // constructor(fName,lastName){
// //     this._firstName=fName;
// //     this._lastName=lastName;
// // }
// // get fullName(){
// // if(this._age>18){
// //     return this._firstName + " " + this._lastName
// // }
// // }
// // }

// // let s1=new Data("Umar","Husain")

// // console.log(s1.fullName)





// // example of setter


// // class Car{

// //     constructor(brand){
// //         this._name=brand
// //     }
// //     get name(){
// //         return this._name.toUpperCase()
// //     } // this is for read 


// //     set name(value){
// //         this._name=value
// //     }// this is for update

// // }
// // // let data=

// // const c1=new Car("BMW")
// // console.log(c1.name)
// // c1.name="audi"
// // // c1.name="audi" >> set name("audi")
// // console.log(c1.name)


// class Std {

//     constructor(name, age) {
//         this._name = name
//         this._age = age
//     }

    

//    static intro(){
//         return "Welcome to the MERN Class"
//     }
//     get name() {
//         return this._name.toUpperCase()
//     } // this is for read 
//     set name(value) {
//         this._name = value
//     }// this is for update
//     set age(value) {
//         if(value<0){
//             console.log("Invalid Age");
//             return;
//         }
//         this._age = value
//     }
// }

// let s1=new Std("akarsh",27)
// s1.age=29
// console.log(s1)
// console.log(s1.intro)// undefined
// console.log(Std.intro()) // class ke ander


// // object-Specific = Instance Method
// // class-Specific= static method

// // Math.max



class BankAccount{
    #balance;
    #accName;
    constructor(accName,balance){
        this.#accName=accName
        this.#balance=balance
    }

    getBalance(){
       return this.#balance
    }
}

let res=new BankAccount("kaushal",5000);

// console.log(res.#balance)

console.log(res.getBalance())