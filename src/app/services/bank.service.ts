import { unwrapResolvedMetadata } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BankService {
  accountDetails:any={
    userone:{acno:1000,balance:1000,username:"userone",password:"testuser",history:[]},
    usertwo:{acno:1001,balance:12000,username:"usertwo",password:"testuser1",history:[]},
    userthree:{acno:1002,balance:13000,username:"userthree",password:"testuser2",history:[]}
}
authenticateUser=(username:string,password:string)=>{
  let dataset=this.accountDetails;
   if(username in dataset){
       if(dataset[username].password==password){
           return 1;//valid username and pwd
       }
       else{
           return 0; // invalid password
       }
   
   }
   else{
      return -1;  //no user exist with provided username
   }
  }
deposit=(username:string,password:string,amount:string)=>{
  let user=this.authenticateUser(username,password)
  let dataset=this.accountDetails
     if(user==1){
    
        dataset[username].balance+=parseInt(amount)
        dataset[username].history.push({amount:amount,typeOfTransaction:'credit'})
           alert("your account is credited with"+amount+"current balance is"+dataset[username].balance)
     }

     else if(user==0){
        alert("incorrect password")
     }
     else if(user==-1){
        alert("no user exist with provided username")
     }
}
 withdraw=(username:string,password:string,amount:string)=>{
   let user=this.authenticateUser(username,password)
   let dataset=this.accountDetails
   if(user==1){
      if(dataset[username].balance>=amount){
      dataset[username].balance-=parseInt(amount)
      dataset[username].history.push({amount:amount,typeOfTransaction:'debit'})
         alert("your account is debited with"+amount+"current balance is"+dataset[username].balance)
      }
   else{
             alert("insufficient balance")
   }
  }
  

   else if(user==0){
      alert("incorrect password")
   }
   else if(user==-1){
      alert("no user exist with provided username")
   }
}
getHistory(){
   let dataset=this.accountDetails
   return dataset["userone"].history

}

 
}
