

// function Sum(){
//     let a=process.argv[2];
//     let b=process.argv[3];

//     console.log("Sum of a and b",Number(a)+Number(b));

// }
// Sum();

const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv
// coffee vending machine

// 


// You have to build a library managment system

// you will have books array =[{name:"harry potter","id":1}];
// node library.js --bookid=1 --name=shubham --duration=15days
// Output Book allotted ,name --harry potter ,duration 15 days
let books = [{
    name: 'Harrypotter',
    id: 1
},{
    name: 'fairytales',
    id: 2
},{
    name: 'atomichabits',
    id: 3
}]

let myfunc = (bookss) =>{
 
   let name = argv.name;
   // filter the id 
   let findObj=books.find(ele=>ele.id==argv.id)
    let bookName = findObj.name
    let days = argv.days;
 
    console.log(`Books allotted, ${name} ${bookName}, duration ${days}days`)
}
 

 
myfunc(books)


