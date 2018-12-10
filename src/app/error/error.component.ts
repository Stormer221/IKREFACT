import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  title: string;
  message: string;

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit() {
    switch (this.route.snapshot.params['code']) {
      case '403':
        this.title = '403';
        this.message = 'Forbidden';
        break;
      default:
        this.title = '404';
        this.message = 'Page not found';
        break;
    }
  }
}
