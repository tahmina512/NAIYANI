import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
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
        setTimeout(type, 200); // Adjust the typing speed (time between letters)
      } else {
        // Typing animation finished, start the move-up animation after a delay
        setTimeout(() => {
          this.moveLogo = true; // Trigger the move-up animation
        }, 1000); // Adjust the delay as needed
      }
    };

    setTimeout(type, 10); // Delay before typing starts (1s in this case)
  }
}
