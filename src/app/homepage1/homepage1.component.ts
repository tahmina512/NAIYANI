import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-homepage1',
  templateUrl: 'homepage1.component.html',
  styleUrls: ['./homepage1.component.scss'],
})
export class Homepage1Component implements OnInit {
  @ViewChild('text', { static: true }) textElement: ElementRef;

  ngOnInit() {
    this.startTypingAnimation();
  }

  startTypingAnimation() {
    const text = this.textElement.nativeElement as HTMLElement;
    const content = text.textContent as string;
    let index = 0;

    function type() {
      if (index <= content.length) {
        text.textContent = content.slice(0, index);
        index++;
        setTimeout(type, 500); // Adjust the typing speed (time between letters)
      }
    }

    // Delay before typing starts (1s in this case)
    text.style.width = '170px'; // Width of the fully typed text
    setTimeout(type, 1000);
  }
}
