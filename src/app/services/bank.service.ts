import { HttpClient, HttpHeaders } from '@angular/common/http';
import { unwrapResolvedMetadata } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';


const apiUrl = environment.apiUrl
@Injectable({
  providedIn: 'root'
})
export class BankService {

constructor( private http:HttpClient){

}

//   accountDetails:any={
//     userone:{acno:1000,balance:1000,username:"userone",password:"testuser",history:[]},
//     usertwo:{acno:1001,balance:12000,username:"usertwo",password:"testuser1",history:[]},
//     userthree:{acno:1002,balance:13000,username:"userthree",password:"testuser2",history:[]}
// }
authenticateUser=(username:string,password:string)=>{
  return this.http.post(apiUrl+"/login",{
      "username":username,
      "password":password

    })
   //  .subscribe((data)=>{
//       console.log(data)
//    })
//   let dataset=this.accountDetails;
//    if(username in dataset){
//        if(dataset[username].password==password){
//            return 1;//valid username and pwd
//        }
//        else{
//            return 0; // invalid password
//        }
   
//    }
//    else{
//       return -1;  //no user exist with provided username
//    }
  }

  generateHeader = ()=>{
    let token = localStorage.getItem("token")
   let headers = new HttpHeaders();
   headers = headers.set("Authorization", "Bearer "+token)
  return headers
}

 deposit=(amount:number)=>{
    return this.http.post(apiUrl+"/deposit",{
      "amount":amount
 },{
headers:this.generateHeader()
    })
//   let user=this.authenticateUser(username,password)
//   let dataset=this.accountDetails
//      if(user==1){
    
//         dataset[username].balance+=parseInt(amount)
//         dataset[username].history.push({amount:amount,typeOfTransaction:'credit'})
//            alert("your account is credited with"+amount+"current balance is"+dataset[username].balance)
//      }

//      else if(user==0){
//         alert("incorrect password")
//      }
//      else if(user==-1){
//         alert("no user exist with provided username")
//      }
 }
  withdraw=(amount:string)=>{
    return this.http.post(apiUrl+"/withdraw",{
      "amount":amount
   },{
      headers:this.generateHeader()

    })
//    let user=this.authenticateUser(username,password)
//    let dataset=this.accountDetails
//    if(user==1){
//       if(dataset[username].balance>=amount){
//       dataset[username].balance-=parseInt(amount)
//       dataset[username].history.push({amount:amount,typeOfTransaction:'debit'})
//          alert("your account is debited with"+amount+"current balance is"+dataset[username].balance)
//       }
//    else{
//              alert("insufficient balance")
//    }
//   }
  

//    else if(user==0){
//       alert("incorrect password")
//    }
//    else if(user==-1){
//       alert("no user exist with provided username")
//    }
 }
getHistory(){
   return this.http.get(apiUrl+"/history",{
      headers:this.generateHeader()

    })
   // let dataset=this.accountDetails
   // return dataset["userone"].history

}
getProfile(){
  return this.http.get(apiUrl+"/profile",{
     headers:this.generateHeader()

   })
  

}
getUsers(){
  return this.http.get(apiUrl+"/users",{
     headers:this.generateHeader()

   })
  

}
updateProfile(username:string,balance:Number,acno:Number){
  return this.http.patch(apiUrl+"/profile",{
 username,
    balance,
    acno
  },{
     headers:this.generateHeader()

   })
  

  }

 
}
