export class Quotation {
  public description: string;
  public date: string;
  public deliverydate: string;
  public price: number;
  public title: string;
  public quotation_id: number;

  constructor(description: string, date: string, deliverydate: string, price: number, title: string, quotation_id: number) {
    this.description = description;
    this.date = date;
    this.deliverydate = deliverydate;
    this.price = price;
    this.title = title;
    this.quotation_id = quotation_id;

  }

}
