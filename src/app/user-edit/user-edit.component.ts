import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Action } from 'rxjs/internal/scheduler/Action';
import { BankService } from '../services/bank.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  constructor(private route:ActivatedRoute,private bankService:BankService) {
    this.route.paramMap.subscribe((params:any)=>{
      const userId = params.params.id
      // bankService.getUser(userId)
    // .subscribe((data:any)=>{
    //   this.profileForm.patchValue({
    //     username:data.username,
    //     balance:data.balance,
    //     acno:data.acno

    //   })
    // })
    })
   }

  ngOnInit(): void {
  }

}
