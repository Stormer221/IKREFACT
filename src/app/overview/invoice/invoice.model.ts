export class Invoice {
  public title: string;
  public date: string;
  public deliveryDate: string;
  public price: number;
  public paid: boolean;
  public payDate: string;
  public description: string;
  public invoiceID: number;


  constructor(title: string, date: string, deliveryDate: string, price: number, paid: boolean, payDate: string,
              description: string, invoiceID: number) {
    this.title = title;
    this.date = date;
    this.deliveryDate = deliveryDate;
    this.price = price;
    this.paid = paid;
    this.payDate = payDate;
    this.description = description;
    this.invoiceID = invoiceID;
  }
}
