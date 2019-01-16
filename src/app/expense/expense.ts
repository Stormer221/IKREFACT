export class Expense {
  private title: string;
  private description: string;
  private costItem: string;
  private amount: number;
  private date: string;
  private company: string;
  private expenseID: number;

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
