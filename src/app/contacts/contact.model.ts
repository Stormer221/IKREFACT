import {AddressModel} from './address.model';
import {EmailModel} from './email.model';
import {PhoneNumberModel} from './phoneNumber.model';

export class Contact {
    public firstName: string;
    public infix: string;
    public surname: string;
    public addresses: AddressModel[];
    public emails: EmailModel[];
    public phonenumbers: PhoneNumberModel[];
    public contactID: number;

  constructor(firstName: string, infix: string, surname: string, addresses: AddressModel[], emails: EmailModel[],
              phoneNumbers: PhoneNumberModel[], contactID: number) {
    this.firstName = firstName;
    this.infix = infix;
    this.surname = surname;
    this.addresses = addresses;
    this.emails = emails;
    this.phonenumbers = phoneNumbers;
    this.contactID = contactID;

  }
}
