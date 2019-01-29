import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-quotation-edit',
  templateUrl: './quotation-edit.component.html',
  styleUrls: ['./quotation-edit.component.css']
})
export class QuotationEditComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  toContacts() {
    this.router.navigate(['/contacten']);
  }
}
