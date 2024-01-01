import { Component } from '@angular/core';

@Component({
  selector: 'app-signin-page',
  standalone: true,
  imports: [],
  templateUrl: './signin-page.component.html',
  styleUrl: './signin-page.component.css'
})

export class SigninPageComponent {
  constructor() {
    console.log('SigninPageComponent');
    console.log('SigninPageComponent');
    console.log('SigninPageComponent');

  }

  // Lifecycle hook that is called after data-bound properties of a directive are initialized.

  ngOnInit() {

  }
}
