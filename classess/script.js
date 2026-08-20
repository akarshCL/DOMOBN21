// // "use strict"

// // // // // // // // // // // // // // class
// // // // // // // // // // // // // // constructor
// // // // // // // // // // // // // //instance method
// // // // // // // // // // // // // // get / set method , static method, private fields


// // // // // // // // // // // // // class obn21{
// // // // // // // // // // // // // constructor(name="Anonymous User",location=null,age=null){
// // // // // // // // // // // // // this._name=name;
// // // // // // // // // // // // // this._location=location;
// // // // // // // // // // // // // this._age=age
// // // // // // // // // // // // // }
// // // // // // // // // // // // // kuchKare(){ // this is a instance method
// // // // // // // // // // // // //     console.log(`Hi my name ${this._name} and im from ${this._location} `)
// // // // // // // // // // // // // }

// // // // // // // // // // // // // get name(){
// // // // // // // // // // // // //     return this._name.toUpperCase()
// // // // // // // // // // // // // }


// // // // // // // // // // // // // get location(){
// // // // // // // // // // // // //     return this._location
// // // // // // // // // // // // // }


// // // // // // // // // // // // // }

// // // // // // // // // // // // // let student1=new obn21("kaushal","Noida");
// // // // // // // // // // // // // let student2=new obn21("saurav","Accio");
// // // // // // // // // // // // // let student3=new obn21();
// // // // // // // // // // // // // console.log(student1.name,student1.location) // both are different
// // // // // // // // // // // // // console.log(student2) // both are different
// // // // // // // // // // // // // console.log(student3)
// // // // // // // // // // // // // student1.kuchKare();
// // // // // // // // // // // // // student3.kuchKare();// normally call ker rahe hai.....

// // // // // // // // // // // // // // the difference between constructor and instance;

// // // // // // // // // // // // // // . Whenever the object creates then automatically constructor gets called;
// // // // // // // // // // // // // // instacnce method we have to call normally

// // // // // // // // // // // // // // constructor > intialization purpose
// // // // // // // // // // // // // // instance > Object ka behaviour

// // // // // // // // // // // // // // constructor()
// // // // // // // // // // // // // // instance() // it can be any name y because its a instance method we are making.





// // // // // // // // // // // // // example of getter in class....

// // // // // // // // // // // // class Data{
// // // // // // // // // // // // constructor(fName,lastName){
// // // // // // // // // // // //     this._firstName=fName;
// // // // // // // // // // // //     this._lastName=lastName;
// // // // // // // // // // // // }
// // // // // // // // // // // // get fullName(){
// // // // // // // // // // // // if(this._age>18){
// // // // // // // // // // // //     return this._firstName + " " + this._lastName
// // // // // // // // // // // // }
// // // // // // // // // // // // }
// // // // // // // // // // // // }

// // // // // // // // // // // // let s1=new Data("Umar","Husain")

// // // // // // // // // // // // console.log(s1.fullName)





// // // // // // // // // // // // example of setter


// // // // // // // // // // // // class Car{

// // // // // // // // // // // //     constructor(brand){
// // // // // // // // // // // //         this._name=brand
// // // // // // // // // // // //     }
// // // // // // // // // // // //     get name(){
// // // // // // // // // // // //         return this._name.toUpperCase()
// // // // // // // // // // // //     } // this is for read 


// // // // // // // // // // // //     set name(value){
// // // // // // // // // // // //         this._name=value
// // // // // // // // // // // //     }// this is for update

// // // // // // // // // // // // }
// // // // // // // // // // // // // let data=

// // // // // // // // // // // // const c1=new Car("BMW")
// // // // // // // // // // // // console.log(c1.name)
// // // // // // // // // // // // c1.name="audi"
// // // // // // // // // // // // // c1.name="audi" >> set name("audi")
// // // // // // // // // // // // console.log(c1.name)


// // // // // // // // // // // class Std {

// // // // // // // // // // //     constructor(name, age) {
// // // // // // // // // // //         this._name = name
// // // // // // // // // // //         this._age = age
// // // // // // // // // // //     }

    

// // // // // // // // // // //    static intro(){
// // // // // // // // // // //         return "Welcome to the MERN Class"
// // // // // // // // // // //     }
// // // // // // // // // // //     get name() {
// // // // // // // // // // //         return this._name.toUpperCase()
// // // // // // // // // // //     } // this is for read 
// // // // // // // // // // //     set name(value) {
// // // // // // // // // // //         this._name = value
// // // // // // // // // // //     }// this is for update
// // // // // // // // // // //     set age(value) {
// // // // // // // // // // //         if(value<0){
// // // // // // // // // // //             console.log("Invalid Age");
// // // // // // // // // // //             return;
// // // // // // // // // // //         }
// // // // // // // // // // //         this._age = value
// // // // // // // // // // //     }
// // // // // // // // // // // }

// // // // // // // // // // // let s1=new Std("akarsh",27)
// // // // // // // // // // // s1.age=29
// // // // // // // // // // // console.log(s1)
// // // // // // // // // // // console.log(s1.intro)// undefined
// // // // // // // // // // // console.log(Std.intro()) // class ke ander


// // // // // // // // // // // // object-Specific = Instance Method
// // // // // // // // // // // // class-Specific= static method

// // // // // // // // // // // // Math.max



// // // // // // // // // // class BankAccount{
// // // // // // // // // //     #balance;
// // // // // // // // // //     #accName;
// // // // // // // // // //     constructor(accName,balance){
// // // // // // // // // //         this.#accName=accName
// // // // // // // // // //         this.#balance=balance
// // // // // // // // // //     }

// // // // // // // // // //     getBalance(){
// // // // // // // // // //        return this.#balance
// // // // // // // // // //     }
// // // // // // // // // // }

// // // // // // // // // // let res=new BankAccount("kaushal",5000);

// // // // // // // // // // // console.log(res.#balance)

// // // // // // // // // // console.log(res.getBalance())

// // // // // // // // // //==========================================


// // // // // // // // // ////encapsulation=======================

// // // // // // // // // class PersonBankAccount{
// // // // // // // // // #balance;
// // // // // // // // // constructor(initialAmount){
// // // // // // // // //     this.#balance=initialAmount
// // // // // // // // // }
// // // // // // // // // deposit(amount){
// // // // // // // // // if(amount>0){
// // // // // // // // //     this.#balance += amount;
// // // // // // // // // }
// // // // // // // // // }
// // // // // // // // // withDraw(amount){
// // // // // // // // // if(amount>0 && this.#balance>=amount){
// // // // // // // // //     this.#balance -= amount
// // // // // // // // //     return `withdraw ${amount}`
// // // // // // // // // }else{
// // // // // // // // //     return "You don't have a enough rupee"
// // // // // // // // // }
// // // // // // // // // }
// // // // // // // // // getBalance(){
// // // // // // // // // return this.#balance
// // // // // // // // // }
// // // // // // // // // }

// // // // // // // // // let res=new PersonBankAccount(1000);// opening bank balance
// // // // // // // // // // res.#balance // we can't write
// // // // // // // // // res.deposit(5000)
// // // // // // // // // console.log(res.withDraw(2000))
// // // // // // // // // console.log(res.getBalance())
// // // // // // // // // // =======================================================




// // // // // // // // class Payment{

// // // // // // // //     pay(amount){

// // // // // // // //         // amountchecker 
// // // // // // // //         this.#validateAmount(amount);
// // // // // // // //         this.#connectToBank()
// // // // // // // //         this.#paymentProcess(amount)
// // // // // // // //         // connectToBank
// // // // // // // //         // Payment Process
// // // // // // // //         console.log("payment successfull!!!!!")
// // // // // // // //     }
// // // // // // // //     #validateAmount(amount){
// // // // // // // //         console.log("validating the amount......")
// // // // // // // //     }
// // // // // // // //     #connectToBank(){
// // // // // // // //         console.log("connection to bank")
// // // // // // // //     }
// // // // // // // //     #paymentProcess(amount){
// // // // // // // //         console.log("processing")
// // // // // // // //     }
// // // // // // // // }


// // // // // // // // let paymentToPay=new Payment();


// // // // // // // // paymentToPay.pay(500);





// // // // // // // class BankAccount{
// // // // // // //     #balance=0; // encapsulation

// // // // // // //     deposite(amount){ // abstarction
// // // // // // //         // validate
// // // // // // //         this.#validate(amount)
// // // // // // //         //balance update
// // // // // // //         this.#balance +=amount;
// // // // // // //     }

// // // // // // //     #validate(amount){
// // // // // // //         // complax logic is running
// // // // // // //     }
// // // // // // // }



// // // // // // // // encapsulation => tp protect the data 
// // // // // // // // abstarction=> to hide the complexity that i don't want to show the user

// // // // // // //================================================================




// // // // // // // class Trainer{
// // // // // // //     constructor(name,age,phone){
// // // // // // //         this.name=name;
// // // // // // //         this.age=age;
// // // // // // //         this.phone=phone
// // // // // // //     }
// // // // // // // }




// // // // // // // class Student{
// // // // // // //     constructor(name,age,phone){
// // // // // // //         this.name=name;
// // // // // // //         this.age=age;
// // // // // // //         this.phone=phone
// // // // // // //     }
// // // // // // // }

// // // // // // class Person{
// // // // // //     constructor(name,age,phone){
// // // // // //         this.name=name;
// // // // // //         this.age=age;
// // // // // //         this.phone=phone
// // // // // //     }

// // // // // //     intro(){
// // // // // //         console.log(`Hello ${this.name}`)
// // // // // //     }

// // // // // // }
// // // // // // class Student extends Person{
// // // // // //     constructor(name,age,phone,course){
// // // // // //       super(name,age,phone)
// // // // // //       this.name="name";
// // // // // //         this.course=course;
// // // // // //     }
// // // // // //     getData(){
// // // // // //         console.log(this.course)
// // // // // //     }

// // // // // //     intro(){
// // // // // //         super.intro()
// // // // // //         console.log(`Hello ${this.name} how are you!`)
// // // // // //     }

// // // // // // }

// // // // // // let s1=new Student("Saquib","30",101,"FSD")

// // // // // // // s1.getData()
// // // // // // console.log(s1.age)
// // // // // // console.log(s1.name)
// // // // // // s1.getData()
// // // // // // s1.intro()

// // // // // // OOPs
// // // // // // Encapsulation 
// // // // // // abstraction
// // // // // // inheritance
// // // // // // polymorphism
// // // // // // composition




// // // // class Parent{
// // // //     constructor(name,age){
// // // //         this.name=name;
// // // //         this.age=age
// // // //     }
// // // //       introduce(){
// // // //         console.log(`Welcome this.name`,this.age,this.city)
// // // //     }
// // // // }



// // // // class Student extends Parent{
// // // //     constructor(name,age,city){
// // // //         super(name,age,city)
// // // //         this.city=city
// // // //     }
// // // //     introduce(){
// // // //         console.log("Welcome Teachers")
// // // //     }
// // // // }


// // // // // class Teacher extends Parent{
// // // // //  constructor(name,age,TrainerCity){
// // // // //     super(name,age)
// // // // //         this.TrainerCity=TrainerCity
// // // // //     }
// // // // //       introduced(){
// // // // //         console.log("Welcome Students")
// // // // //     }
// // // // // }

// // // // // let s1=new Student("Saquib","28","noida")

// // // // // let T=new Teacher("Akarsh","29","Gurugram")

// // // // // console.log(s1.name,s1.age,s1.city)
// // // // // s1.introduce()
// // // // // s1.introduces()
// // // // // console.log(T.name,T.age,T.TrainerCity)

// // // // // poly= many 
// // // // // morph= forms






// // // class Animal{
// // //     speak(){
// // //         console.log("Animal is barking")
// // //     }
// // // }
// // // class Dog extends Animal{
// // //     speak(){
// // //         console.log("dog is barking bhow-bhow")
// // //     }
// // // }
// // // class Cat extends Animal{
// // //     speak(){
// // //         console.log("cat is barking meaw-meaw")
// // //     }
// // // }
// // // const dogs=new Dog();
// // // const cat=new Cat();
// // // dogs.speak()
// // // cat.speak()

// // // =====================================================

// // // composition 


// // const car={
// //     start(){
// //         console.log("engine starts")
// //     }
// // }

// // const musicPlayer={
// //     play(){
// //         console.log("party hard with music")
// //     }
// // }

// // const composition={
// //     car,
// //     musicPlayer,
// //     res(){
// //         this.car.start()
// //         this.musicPlayer.play()

// //         console.log("happy journey")
// //     }
// // }
// // composition.res()
// // console.log(composition)


// // function Student(name,age){
// //     this.name=name;
// //     this.age=age;
 
// // }

// // Student.prototype.introduce=function(){
// //     console.log(`${this.name} and ${this.age}`)
// // }
// // let res=new Student("akarsh",23)

// // res.introduce()


// "use strict"

// function abc(){
//     console.log(this)
// }
// abc()

// let res=user.intr()
// res()


let date=new Date();
console.log(date)
console.log(date.getDay())
console.log(date.getFullYear())
console.log(date.getMinutes)



