import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sizecorrected',
  templateUrl: './sizecorrected.component.html',
  styleUrls: ['./sizecorrected.component.scss'],
})
export class SIZECORRECTEDComponent implements OnInit {
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
        }, 2000);
      }, 5200);
    }, 2000);
    setTimeout(() => {
      const myDiv = document.querySelector('.container') as HTMLElement;
      myDiv.classList.add('show-border');
    }, 7000); 
    setTimeout(() => {
      this.router.navigate(['/database-btn']);
    }, 13000);
  }
}
