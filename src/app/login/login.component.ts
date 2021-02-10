import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BankService } from '../services/bank.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // username="";
  // password="";
  loginForm=this.fb.group({
    username:["",[Validators.required]],
    password:["",[Validators.required,Validators.minLength(5) ]]

  })

  constructor( private router:Router, private bankService:BankService, private fb:FormBuilder) { 
    
  }

  ngOnInit(): void {
  }
  // onUsernameChange(event:any){
  //   this.username=(event.target.value)
  // }
  // onPasswordChange(event:any){
  //   this.password=(event.target.value)
  // }
  login(){
    if(this.loginForm.valid==false){
     
    alert("invalid form")
    
  }
    else{
    const username=this.loginForm.value.username
    const password=this.loginForm.value.password
    // alert(username)
    // alert(password)
    
    const us=this.bankService.authenticateUser(username,password);
    if(us==1){
      alert("login succesfull")
      this.router.navigateByUrl("/home")
      

   }

   else if(us==0){
      alert("incorrect password")
   }
   else if(us==-1){
      alert("no user exist with provided username")
   }
  }
} 
  }


