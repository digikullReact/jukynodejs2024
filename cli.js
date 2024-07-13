

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

function CoffeeVending(obj ){
    let mochaCount=obj["mocha"];
    let capachino=obj.cappuccino //obj["cappuccino"]; // 
    let latte=obj["latte"];
    // Will create a bill 
    const mochCost=200*Number(mochaCount);
    const capachinoCost=300*Number(capachino);
    const latteCost=500*Number(latte);

    let finalBill=mochCost+capachinoCost+latteCost;

    return finalBill

}

let orderObj={
    "mocha":argv.mocha,
    "cappuccino":argv.cappuccino,
    "latte":argv.latte

}

let totalBill=CoffeeVending(orderObj);

//console.log("final Bill---",totalBill)

console.log(process);


// You have to build a library managment system

// you will have books array =[{name:"harry potter","id":1}];
// node library.js --bookid=1 --name=shubham --duration=15days
// Output Book allotted ,name --harry potter ,duration 15 days
