import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  error: string;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    console.log(this.route.snapshot.params['code']);
    this.error = this.errorMessage();
  }

  errorMessage() {
    let message: string;

    switch (this.route.snapshot.params['code']) {
      case '403':
        message = '403 - Forbidden';
        break;
      default:
        message = '404 - Page not found';
        break;
    }

    return message;
  }

}
