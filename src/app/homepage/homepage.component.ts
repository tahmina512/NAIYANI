import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  text = 'NAIYANI'; // Define the text you want to type
  letters: string[] = [];

  constructor() {}

  ngOnInit(): void {
    this.splitText();
  }

  splitText() {
    this.letters = this.text.split('');
  }
}
