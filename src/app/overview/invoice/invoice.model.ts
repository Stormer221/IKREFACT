export class Invoice {
  public decription: string;
  public date: string;
  public deliverydate: string;
  public price: number;
  public invoicetitle: string;
  public paid: boolean;
  public pay_date: string;

  constructor(decription: string, date: string, deliverydate: string, price: number, invoicetitle: string,
              paid: boolean, pay_date: string) {
    this.decription = decription;
    this.date = date;
    this.deliverydate = deliverydate;
    this.price = price;
    this.invoicetitle = invoicetitle;
    this.paid = paid;
    this.pay_date = pay_date;
  }
}
