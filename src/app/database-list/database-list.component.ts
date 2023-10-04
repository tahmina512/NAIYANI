import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-database-list',
  templateUrl: './database-list.component.html',
  styleUrls: ['./database-list.component.scss'],
})
export class DatabaseListComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit(): void {
    // setTimeout(() => {
    //   this.router.navigate(['/info']);
    // }, 6000);
  }
  navigateDatabasePage() {
    this.router.navigate(['/database-btn']);
  }
}
