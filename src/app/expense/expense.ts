export class Expense {
  private _title: string;
  private _description: string;
  private _costItem: string;
  private _amount: number;
  private _date: string;
  private _company: string;
  private _expenseID: number;

  constructor(title: string, description: string, costItem: string, amount: number, date: string, company: string,
              expenseID: number = null) {
    this._title = title;
    this._description = description;
    this._costItem = costItem;
    this._amount = amount;
    this._date = date;
    this._company = company;
    this._expenseID = expenseID;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get costItem(): string {
    return this._costItem;
  }

  set costItem(value: string) {
    this._costItem = value;
  }

  get amount(): number {
    return this._amount;
  }

  set amount(value: number) {
    this._amount = value;
  }

  get date(): string {
    return this._date;
  }

  set date(value: string) {
    this._date = value;
  }

  get company(): string {
    return this._company;
  }

  set company(value: string) {
    this._company = value;
  }

  get expenseID(): number {
    return this._expenseID;
  }

  set expenseID(value: number) {
    this._expenseID = value;
  }
}
