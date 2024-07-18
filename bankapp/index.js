const readline = require('readline');
const fs=require("fs");
const os=require("os");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// We will create a bank account
// We will ask for name ,we will ask for aadharid
// we will ask for how much money you want to deposit
// we will create a file for that user
rl.question(`What's your name? ${os.EOL}`, (name) => {

    rl.question(`Please Provide your Aadhar Card Id ?  ${os.EOL}`,(aadharId)=>{
        console.log(aadharId)
        
        fs.writeFile(`accounts/${aadharId}.account`,`Name : ${name} Account OpeningDate :${new Date().toISOString()}`,function(err,data){
            if (err !=null){
                console.log(err);
                rl.close();
                return

            }
            console.log("Account created Successfully")
            rl.close();
        })

        // we will create a file 

    })

 // 
});