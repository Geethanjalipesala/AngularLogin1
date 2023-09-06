import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router'; // Import Router



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.pattern(/^\S+@\S+\.\S+$/)]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });;
  loginMessage: string =" ";

  constructor(private fb: FormBuilder,  private authService: AuthService, private router: Router){

  } 
    
  

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.loginForm.valid) {
      let email = this.loginForm.value.email;
      let password = this.loginForm.value.password;

   
      if (this.authService.authenticate('email', 'password')) {
   
        this.router.navigate(['/next-page']);
      } else {
      
        this.loginMessage = 'Login failed. Please check your credentials.';
      }
    } else {
      this.loginMessage = 'Please fill in the required fields.';
    }
  }
}
