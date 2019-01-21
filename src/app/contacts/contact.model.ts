import {AddressModel} from './address.model';
import {EmailModel} from './email.model';
import {PhoneNumberModel} from './phoneNumber.model';

export class Contact {
    public firstName: string;
    public infix: string;
    public surname: string;
    public addresses: AddressModel[];
    public emails: EmailModel[];
    public phoneNumbers: PhoneNumberModel[];
    public contactID: number;
    public companyFreelancer: ['bedrijf', 'freelancer']
    public cfDescription: string

  constructor(firstName: string, infix: string, surname: string, addresses: AddressModel[], emails: EmailModel[],
              phoneNumbers: PhoneNumberModel[], contactID: number, companyFreelancer: ['bedrijf', 'freelancer'], cfDescription: string) {
    this.firstName = firstName
    this.infix = infix
    this.surname = surname
    this.addresses = addresses;
    this.emails = emails;
    this.phoneNumbers = phoneNumbers;
    this.contactID = contactID;
    this.companyFreelancer = companyFreelancer;
    this.cfDescription = cfDescription;
  }
}
