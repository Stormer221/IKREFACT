export class Quotation {
  public description: string;
  public date: string;
  public deliveryDate: string;
  public price: number;
  public title: string;
  public quotationID: number;
  public delivery: string;
  public concerns: string;
  public hours: string;
  public vat: number;


  constructor(description: string = '', date: string = '', deliveryDate: string = '', price: number = 0, title: string = '',
              quotationID: number = null, delivery: string = '', concerns: string = '', hours: string = '', vat: number) {
    this.description = description;
    this.date = date;
    this.deliveryDate = deliveryDate;
    this.price = price;
    this.title = title;
    this.quotationID = quotationID;
    this.delivery = delivery;
    this.concerns = concerns;
    this.hours = hours;
    this.vat = vat;

  }

}
