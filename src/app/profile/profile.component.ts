import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BankService } from '../services/bank.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileForm=this.fb.group({
    username:["",[Validators.required]],
    balance:["",[Validators.required]],
    acno:["",[Validators.required]]


  })
  
  constructor(private fb:FormBuilder,private bankService:BankService) {
    bankService.getProfile()
    .subscribe((data:any)=>{
      this.profileForm.patchValue({
        username:data.username,
        balance:data.balance,
        acno:data.acno

      })
    })
   }

  ngOnInit(): void {
  }
updateProfile(){
  if(this.profileForm.valid==false){
    alert("invalid data")
  }else{
    this.bankService.updateProfile(
    this.profileForm.value.username,
    this.profileForm.value.balance,
    this.profileForm.value.acno,
 ).subscribe((data:any)=>{
   alert(data.message)
 })
  }
  
}
}
