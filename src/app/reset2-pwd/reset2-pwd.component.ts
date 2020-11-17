import { HttpClient } from '@angular/common/http';
import { ResetService } from './../services/reset.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '../services/account.service';
import { AuthService } from '../services/auth.service';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-reset2-pwd',
  templateUrl: './reset2-pwd.component.html',
  styleUrls: ['./reset2-pwd.component.css']
})
export class Reset2PwdComponent implements OnInit {

 
  test:any;

  formLogin=new FormGroup({
  
    password:new FormControl('',[Validators.required,Validators.minLength(6)]),
    confirmPassword:new FormControl('',[Validators.required,Validators.minLength(6)]),
    token:new FormControl(''),
    

  })


  constructor(private reset:ResetService,private router:Router,private account:AccountService,private http:HttpClient,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    
    this.activatedRoute.queryParams.subscribe(params => {
      this.test = params['token'];
      
  });

  }
  resetPwd(): void {
    console.log(this.formLogin)
    this.reset.forgotPwd2(this.formLogin.value)
        .subscribe( data => {
          this.router.navigate(['/login']);
       
        
        });

  };

}
