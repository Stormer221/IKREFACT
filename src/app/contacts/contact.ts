import {OnInit} from '@angular/core';

export class Contact implements OnInit {

  public name: string;
  public infix: string;
  public surname: string;
  public phoneNr: number;
  public street: string;
  public houseNr: number;
  public mailingAddress: string;
  public zipCode: string;

  constructor(name: string, infix: string, surname: string,
              phoneNr: number, street: string, houseNr: number,
              mailingAddress: string, zipCode: string) {
    this.name = name;
    this.infix = infix;
    this.surname = surname;
    this.phoneNr = phoneNr;
    this.street = street;
    this.houseNr = houseNr;
    this.mailingAddress = mailingAddress;
    this.zipCode = zipCode;
  }

  ngOnInit() {
  }
}
