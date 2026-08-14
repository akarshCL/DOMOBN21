
var a = 10;
console.log(a)
function abc() {
    if (a == 10) {
       var  a = 20;
        console.log(a);

        function xyz() {
            console.log(a)
        }
        xyz()
    }

}
abc();
console.log(a);




