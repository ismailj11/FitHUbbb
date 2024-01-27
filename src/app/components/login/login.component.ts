import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm?: any;

  constructor(private fb: FormBuilder, private authservice : AuthService, private router: Router,private toastr: ToastrService) {}
  
  ngOnInit(): void {
    
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const username = this.loginForm.get('username').value;
      const password = this.loginForm.get('password').value;
      
       // Call the authentication service's login method
       if (this.authservice.login(username, password)) {
        // Navigate to the ProductListComponent upon successful login
        this.router.navigate(['/dashboard']);
        
      } else {
        // Handle authentication error (show error message, etc.)
        
      }

    

    }
    
  }
}
