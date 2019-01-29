export class Quotation {
  public description: string;
  public date: string;
  public deliverydate: string;
  public price: number;
  public title: string;
  public quotationID: number;

  constructor(description: string, date: string, deliverydate: string, price: number, title: string, quotationID: number) {
    this.description = description;
    this.date = date;
    this.deliverydate = deliverydate;
    this.price = price;
    this.title = title;
    this.quotationID = quotationID;
  }

}
