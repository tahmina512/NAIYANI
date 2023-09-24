import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.scss'],
})
export class TestingComponent implements OnInit {
  content = 'Your Text Here'; // The text to type
  typedText: { text: string; opacity: number }[] = []; // Initialize as an empty array

  constructor() {}

  ngOnInit(): void {
    this.typeText(0); // Start typing from the first letter
  }

  typeText(index: number) {
    if (index <= this.content.length) {
      // Push each letter into the typedText array with an initial opacity of 0
      this.typedText.push({ text: this.content[index], opacity: 0 });

      // After a short delay, gradually increase the opacity
      setTimeout(() => {
        this.typedText[index].opacity = 1; // Set opacity to 1 (fully visible)
        this.typeText(index + 1); // Move to the next letter
      }, 200); // Adjust the typing speed (time between letters)
    }
  }
}

