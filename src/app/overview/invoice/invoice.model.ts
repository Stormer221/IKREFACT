export class Invoice {
  public description: string;
  public date: string;
  public deliverydate: string;
  public price: number;
  public invoicetitle: string;
  public paid: boolean;
  public pay_date: string;

  constructor(description: string, date: string, deliverydate: string, price: number, invoicetitle: string,
              paid: boolean, pay_date: string) {
    this.description = description;
    this.date = date;
    this.deliverydate = deliverydate;
    this.price = price;
    this.invoicetitle = invoicetitle;
    this.paid = paid;
    this.pay_date = pay_date;
  }
}
