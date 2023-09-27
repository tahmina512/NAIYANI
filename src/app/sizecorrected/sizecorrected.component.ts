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
        console.log(this.moveLogo);
        this.moveLogo = true;
         console.log(this.moveLogo);
      }, 4000);
    }, 2000);
  }
}
