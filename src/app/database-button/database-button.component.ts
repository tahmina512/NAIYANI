import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-database-button',
  templateUrl: './database-button.component.html',
  styleUrls: ['./database-button.component.scss'],
})
export class DatabaseButtonComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    // setTimeout(() => {
    //   this.router.navigate(['/list']);
    // }, 7000);
  }
  navigateToSignINPage() {
    this.router.navigate(['']);
  }
  navigateToDatabaseListPage()
  {
     this.router.navigate(['/list']);
  }
}
