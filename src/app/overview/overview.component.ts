import {Component, OnInit} from '@angular/core';
import {Route, Router} from '@angular/router';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  toFacturen() {
    this.router.navigate(['/facturen']);
  }
}
