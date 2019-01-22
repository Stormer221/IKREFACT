import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotationEditComponent } from './quotation-edit.component';

describe('QuotationEditComponent', () => {
  let component: QuotationEditComponent;
  let fixture: ComponentFixture<QuotationEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotationEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotationEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
