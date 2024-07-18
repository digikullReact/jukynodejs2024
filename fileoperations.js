const fs=require("fs");
const os=require("os");
// callback one 
// promise one 
// sync method
// console.log("hello there")
// fs.readFile("hello.js","utf-8",function(err,data){
//     console.log(data);

// })
// console.log("hello after")

// fs.writeFile("data.txt","hello world",function(err,data){
//     console.log("written in file")

// })

// fs.appendFile("data.txt","hello world"+os.EOL,function(err,data){
//     console.log("appended in file")
// })

// fs.unlink("data.txt",function(err,data){
//     console.log(data);
// })

// do the sync methods
// console.log("hii there");
// const data=fs.readFileSync("hello.js","utf-8"); // synchronous version
// // it will wait for the data to be read from the file
// console.log(data);

// console.log("byee");

//const err=fs.writeFileSync("","data");
//console.log(err);

fs.unlinkSync("data.txt");  // they will block the event loop