import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

// import the angular material modules
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

// import shared components
import { HeaderComponent, AnnouncementBannerComponent, FooterComponent } from '../../shared';

// import the auth service
import { AuthService } from '../../services/auth.service';

@Component({
   selector: 'app-signup-page',
   templateUrl: './signup-page.component.html',
   styleUrl: './signup-page.component.scss',
   standalone: true,
   imports: [
      CommonModule,
      ReactiveFormsModule,
      MatCardModule,
      MatInputModule,
      MatFormFieldModule,
      MatCheckboxModule,
      MatButtonModule,
      MatIconModule,
      HeaderComponent,
      AnnouncementBannerComponent,
      FooterComponent,
      RouterModule,
   ],
})
export class SignupPageComponent {
   // inject the router, form builder, and auth service
   constructor(private router: Router, private formBuilder: FormBuilder, private authService: AuthService) {}

   // create the signup form
   signupForm = this.formBuilder.group({
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required],
   });

   // sign up user with email and password
   onSubmitSignUp() {
      this.authService
         .signUpUser(this.signupForm.value.email!, this.signupForm.value.password)
         .then(() => {
            // navigate user to the main page
            this.router.navigateByUrl('/');
         })
         // if error, display the error message
         .catch((error) => {
            window.alert(error.message);
         });
   }

   getErrorMessage() {
      if (this.signupForm.hasError('required')) {
         return 'Please enter a email address';
      }

      return this.signupForm.hasError('email') ? 'Not a valid email address' : '';
   }
}
