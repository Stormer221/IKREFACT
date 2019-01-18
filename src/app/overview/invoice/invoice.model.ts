export class Invoice {
  public description: string;
  public date: string;
  public deliverydate: string;
  public price: number;
  public invoicetitle: string;
  public paid: boolean;
  public pay_date: string;
  public invoice_id: number;

  constructor(description: string, date: string, deliverydate: string, price: number, invoicetitle: string,
              paid: boolean, pay_date: string, invoice_id: number) {
    this.description = description;
    this.date = date;
    this.deliverydate = deliverydate;
    this.price = price;
    this.invoicetitle = invoicetitle;
    this.paid = paid;
    this.pay_date = pay_date;
    this.invoice_id = invoice_id;
  }
}
