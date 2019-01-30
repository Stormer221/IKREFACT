export class Quotation {
  public description: string;
  public date: string;
  public deliverydate: string;
  public price: number;
  public title: string;
  public quotationID: number;
  public delivery: string;
  public concerns: string;
  public hours: string;


  constructor(description: string, date: string, deliverydate: string, price: number, title: string, quotationID: number,
              delivery: string, concerns: string, hours: string) {
    this.description = description;
    this.date = date;
    this.deliverydate = deliverydate;
    this.price = price;
    this.title = title;
    this.quotationID = quotationID;
    this.delivery = delivery;
    this.concerns = concerns;
    this.hours = hours;

  }

}
