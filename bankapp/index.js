const readline = require('readline');
const fs=require("fs");
const os=require("os");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question(`Welcome To Lena Dena Bank ,Please select one of the option From the list ${os.EOL} 
1 - Open Account ,2 - Close Account , 3- Deposit Money ,4- WithDraw Money
`,function(input){
    switch (Number(input)) {
        case 1:
            createAccount()
            
            break;
         case 2:
            deleteAccount()
            break;  
         case 3:
            depositMoney();
            break;   
    
        default:
            break;
    }


})

function depositMoney(){
    rl.question(`What's your addhar Id? ${os.EOL}`, (addharId) => {
        // we have to check whether this aadhar id exists or not
        fs.stat(`accounts/${addharId}.account`,function(err ,data){
            if (err!=null){
                console.log("Account not found ,please re enter the aadhar id")
                depositMoney();
                return;
            }

            rl.question(`How much amount you want to deposit?  ${os.EOL}`,(amount)=>{
            
                fs.appendFile(`accounts/${addharId}.account`,`${os.EOL} Amount:${amount}`,function(err,data){
                    if (err !=null){
                        console.log(err);
                        rl.close();
                        return
        
                    }
                    console.log("Account credited Successfully in your account")
                    rl.close();
                })
        
                // we will create a file 
        
            })

        })

       
    
     // 
    });


}

// We will create a bank account
// We will ask for name ,we will ask for aadharid
// we will ask for how much money you want to deposit
// we will create a file for that user

function createAccount(){
    rl.question(`What's your name? ${os.EOL}`, (name) => {

        rl.question(`Please Provide your Aadhar Card Id ?  ${os.EOL}`,(aadharId)=>{
            
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

}

function deleteAccount(){
    rl.question(`Enter the Aadhar Id related to your bank account? ${os.EOL}`, (aadharId) => {

        // we will search for the file name 

        fs.unlink(`accounts/${aadharId}.account`,(err)=>{
            if (err!=null){
                console.log("Acoount not found ,please renter the adhar id");
                deleteAccount()
                return ;
            }
            console.log("Account closed ,thanks for doing business with us");
          rl.close();
        })

    
     // 
    });

}
