import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button-input',
  templateUrl: './button-input.component.html',
  styleUrls: ['./button-input.component.scss'],
})
export class ButtonInputComponent implements OnInit {
  constructor(private router: Router) {}
  moveLogo: boolean = false;
  showDiv: Boolean = false;
  showIcons: Boolean = false;
  isUserVisible: Boolean = false;
  isPasswordVisible: Boolean = false;
  usernameValue: string = '';
  passwordValue: string = '';

  @ViewChild('usernameInput') usernameInput: ElementRef;
  @ViewChild('passwordInput') passwordInput: ElementRef;
  ngOnInit(): void {
    setTimeout(() => {
      this.showDiv = true;
      setTimeout(() => {
        this.moveLogo = true;
        setTimeout(() => {
          this.showDiv = false;
          this.showIcons = true;
        }, 3000);
      }, 7500);
    }, 2000);
    setTimeout(() => {
      const myDiv = document.querySelector('.container') as HTMLElement;
      myDiv.classList.add('show-border');
    }, 9500);
    // setTimeout(() => {
    //   this.router.navigate(['/database-btn']);
    // }, 21000);
  }
  showUserBox(inputType: string) {
    if (inputType === 'username') {
      this.isUserVisible = true;
    
    setTimeout(() => {
      if (this.usernameInput && this.usernameInput.nativeElement) {
        this.usernameInput.nativeElement.focus();
      }
    });
  }
    // setTimeout(() => {
    //   this.usernameInput.nativeElement.focus();
    // }, 1);

  }

  showPasswordBox(inputType: string) {
    if (inputType === 'password') {
      this.isPasswordVisible = true;
    }
    setTimeout(() => {
      this.passwordInput.nativeElement.focus();
    }, 1);
  }
  handleInputFocusout(inputType: string, event: FocusEvent): void {
    if (inputType === 'username') {
      const inputElement = event.target as HTMLInputElement;
      if (inputElement.value.trim() === '') {
        this.isUserVisible = false; // Hide the input box
      }
    }
    if (inputType === 'password') {
      const inputElement1 = event.target as HTMLInputElement;
      if (inputElement1.value.trim() === '') {
        this.isPasswordVisible = false; // Hide the input box
      }
    }
  }
}
