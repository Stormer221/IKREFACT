export class Contact {
    public name: string;
    public infix: string;
    public surname: string;
    public street: string;
    public houseNr: number;
    public place: string;
    public phoneNr: string;
    public email: string;
    public zipCode: string;
    public id: number;

  constructor(name: string, infix: string, surname: string, place: string, street: string, houseNr: number,
              phoneNr: string, email: string, zipCode: string, id: number) {
    this.name = name;
    this.infix = infix;
    this.surname = surname;
    this.phoneNr = phoneNr;
    this.place = place;
    this.street = street;
    this.houseNr = houseNr;
    this.email = email;
    this.zipCode = zipCode;
    this.id = id;
  }
}
