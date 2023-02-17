
//---------------- arrow function
const product = (a,b) => a*b;

let val1=12;
let val2 = 10;
console.log(product(val1,val2));
console.log(product(5,2));


// ------------ Objects

const Student = {
    name:"Shubham",
    age:23,
    info(){
        console.log(`Hi i am ${this.name} my age is ${this.age}`);
    }

}

Student.info();