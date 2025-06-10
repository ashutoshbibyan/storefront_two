import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {AuthService} from "../auth.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule
  ],
  providers: [AuthService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm:FormGroup;
  formError:string = '';
  constructor(formBuilder: FormBuilder , private  authService: AuthService) {
    this.loginForm = formBuilder.group({
      'email':new FormControl('', [Validators.required , Validators.email]),
      'password':new FormControl('', [Validators.required])
    })
  }

  login(){
    this.formError = '';
    this.authService.login(this.loginForm.value).subscribe({next:(data:{token:string})=>{
      localStorage.setItem('token',data.token);

    },error:(err:HttpErrorResponse) => this.formError = err.error.message});
  }

  getEmailErrors():string{
    if(this.loginForm.controls['email'].invalid && !this.loginForm.controls['email'].untouched){
      if(this.loginForm.controls['email'].hasError('required')){return '* email is required'}
      else if(this.loginForm.controls['email'].hasError('email')){return '* enter valid email'}
    }
    return '';
  }

  getPasswordError():string{
    if(this.loginForm.controls['password'].invalid && !this.loginForm.controls['password'].untouched){
      if(this.loginForm.controls['password'].hasError('required')){return '* password is required'}
    }
    return '';
  }
}
