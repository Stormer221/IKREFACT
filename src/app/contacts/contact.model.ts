export class Contact {
    public firstName: string;
    public infix: string;
    public surname: string;
    public street: string;
    public houseNr: number;
    public place: string;
    public phoneNr: string;
    public emails: string;
    public zipCode: string;
    public contactID: number;

  constructor(firstName: string, infix: string, surname: string, place: string, street: string, houseNr: number,
              phoneNr: string, email: string, zipCode: string, contactID: number) {
    this.firstName = firstName;
    this.infix = infix;
    this.surname = surname;
    this.phoneNr = phoneNr;
    this.place = place;
    this.street = street;
    this.houseNr = houseNr;
    this.emails = email;
    this.zipCode = zipCode;
    this.contactID = contactID;
  }
}
