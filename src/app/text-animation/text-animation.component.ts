import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-text-animation',
  templateUrl: './text-animation.component.html',
  styleUrls: ['./text-animation.component.scss'],
})
export class TextAnimationComponent implements OnInit {
  showShape: Boolean = false;
  ngOnInit(): void {
    // setTimeout(() => {
    //   this.showShape = true;
    // }, 3000);
  }
}
