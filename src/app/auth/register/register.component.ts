import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-register',
  imports: [
    ReactiveFormsModule
  ],
  providers: [AuthService],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  registerForm: FormGroup;
  formError:string = '';
  constructor(private _formBuilder: FormBuilder , private authService: AuthService) {
    this.registerForm = this._formBuilder.group({
      'email':new FormControl('', [Validators.required ,Validators.email]),
      'password':new FormControl('', [Validators.required])
    })
  }

  register(){
    this.formError = '';
    this.authService.register(this.registerForm.value).subscribe({
      next:(data:string)=>{
        console.log(data);
      },error:(err:HttpErrorResponse) => this.formError = err.error.message
    });
  }

  getEmailErrors():string{
    if(this.registerForm.controls['email'].invalid && !this.registerForm.controls['email'].untouched){
      if(this.registerForm.controls['email'].hasError('required')){return '* email is required'}
      else if(this.registerForm.controls['email'].hasError('email')){return '* enter valid email'}
    }
    return '';
  }

  getPasswordError():string{
    if(this.registerForm.controls['password'].invalid && !this.registerForm.controls['password'].untouched){
      if(this.registerForm.controls['password'].hasError('required')){return '* password is required'}
    }
    return '';
  }
}
