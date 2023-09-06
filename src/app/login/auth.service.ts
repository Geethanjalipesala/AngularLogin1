// auth.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Your authentication logic goes here
  authenticate(email: string, password: string): boolean {
    // Replace with your actual authentication logic
    // For this example, we're assuming a simple check
    if (email === 'user@example.com' && password === 'password') {
      return true;
    } else {
      return false;
    }
  }
}
