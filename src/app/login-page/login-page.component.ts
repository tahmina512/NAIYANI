import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sizecorrected',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LOGINPAGEComponent implements OnInit {
  constructor(private router: Router) {}
  moveLogo: boolean = false;
  showDiv: Boolean = false;
  showIcons: Boolean = false;
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
    setTimeout(() => {
      this.router.navigate(['/database-btn']);
    }, 21000);
  }
}
