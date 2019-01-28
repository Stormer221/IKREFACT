import {TestBed} from '@angular/core/testing';

import {ExpenseService} from './expense.service';
import {HttpClientModule} from "@angular/common/http";

/**
 * @author Sergi Philipsen
 */

describe('ExpenseService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule],
  }));

  it('should be created', () => {
    const service: ExpenseService = TestBed.get(ExpenseService);
    expect(service).toBeTruthy();
  });
});
