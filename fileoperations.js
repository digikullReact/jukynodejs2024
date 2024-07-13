const fs=require("fs");

fs.readFile("hello.js","utf-8",function(err,data){
    console.log(data);

})