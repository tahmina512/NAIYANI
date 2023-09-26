import { Component } from '@angular/core';

@Component({
  selector: 'app-sizecorrected',
  templateUrl: './sizecorrected.component.html',
  styleUrls: ['./sizecorrected.component.scss'],
})
export class SIZECORRECTEDComponent {
  moveLogo: boolean = false;
  showDiv: Boolean = false;
  ngOnInit(): void {
    setTimeout(() => {
      this.showDiv = true;
      setTimeout(() => {
        this.moveLogo = true;
      }, 4000);
    }, 2000);
  }
}
