/**
 * The Expense model.
 *
 * @author Sergi Philipsen.
 */

export class Expense {
  title: string;
  description: string;
  costItem: string;
  amount: number;
  date: string;
  company: string;
  expenseID: number;

  constructor(title: string = '',
              description: string = '',
              costItem: string = '',
              amount: number = null,
              date: string = '',
              company: string = '',
              expenseID: number = null
  ) {
    this.title = title;
    this.description = description;
    this.costItem = costItem;
    this.amount = amount;
    this.date = date;
    this.company = company;
    this.expenseID = expenseID;
  }
}
