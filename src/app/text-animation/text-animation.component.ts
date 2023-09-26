import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-text-animation',
  templateUrl: './text-animation.component.html',
  styleUrls: ['./text-animation.component.scss'],
})
export class TextAnimationComponent implements OnInit {
  moveLogo: boolean = false;
  showDiv: Boolean = false;
  ngOnInit(): void {
    setTimeout(() => {
      this.showDiv = true;
       setTimeout(() => {
         this.moveLogo = true; // Trigger the move-up animation
         // setTimeout(() => {
         //   this.router.navigate(['/signin']);
         // }, 3000);
       }, 4000);
    }, 2000);
  }
}
