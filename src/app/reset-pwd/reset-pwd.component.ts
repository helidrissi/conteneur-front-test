import { ResetService } from './../services/reset.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../services/account.service';
import { AuthService } from '../services/auth.service';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-reset-pwd',
  templateUrl: './reset-pwd.component.html',
  styleUrls: ['./reset-pwd.component.css']
})
export class ResetPwdComponent implements OnInit {
  succesMessage:String;
  errorMessage:string;
  formReset=new FormGroup({
    
    email:new FormControl('',[Validators.required,Validators.email]),
    


  })

  constructor(private reset:ResetService,private token:TokenService,private router:Router,private account:AccountService) { }

  ngOnInit(): void {

    this.account.authStatus.subscribe(
      res => {
    
        ;
      }
    )
  }
 

  resetPwd(): void {
    this.errorMessage = "";
    this.succesMessage = "";
    this.reset.forgotPwd(this.formReset.value)
        .subscribe( data => {
          this.router.navigate(['/login']);
          }, error => {
            if(error.status === 200) {
              this.succesMessage = "Cool";
            }
            else {
              this.errorMessage = "Pas cool";
            }
          });
       
        
        }

}
