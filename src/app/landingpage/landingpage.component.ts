import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss'],
})
export class LandingpageComponent implements OnInit {
  moveLogo: boolean = false;
  typedText: string = '';
  showShape: boolean = false;
  
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.startTypingAnimation();
  }
  startTypingAnimation() {
    const content = 'NAIYANI';
    let index = 0;

    const type = () => {
      if (index <= content.length) {
        this.typedText = content.slice(0, index);
        index++;
        setTimeout(type, 200);
      }
      else {
      
        setTimeout(() => {
          this.showShape = true; // Show the shape

          // setTimeout(() => {
          //   this.moveLogo = true; // Trigger the move-up animation
          //   setTimeout(() => {
          //     this.router.navigate(['/signin']);
          //   }, 3000);
          // }, 2000); // Adjust the delay as needed for the brief moment
        }, 700);
      }
    };

    setTimeout(type, 10); // Delay before typing starts 
  }
}
