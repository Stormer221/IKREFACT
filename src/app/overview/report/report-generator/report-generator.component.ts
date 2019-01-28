import {Component, OnInit} from '@angular/core';
import {CostItemModel} from "../../../expense/costItem.model";
import {Router} from "@angular/router";

/**
 * @author Sergi Philipsen
 */

@Component({
  selector: 'app-report-generator',
  templateUrl: './report-generator.component.html',
  styleUrls: ['./report-generator.component.css']
})
export class ReportGeneratorComponent implements OnInit {
  public startDate: Date;
  public endDate: Date;
  public costItem: CostItemModel;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  submitGenerateForm() {
    this.router.navigate(['rapport/' + this.startDate + '/' + this.endDate + '/' + this.costItem])
  }
}
