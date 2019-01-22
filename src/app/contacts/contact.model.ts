import {AddressModel} from './address.model';
import {EmailModel} from './email.model';
import {PhoneNumberModel} from './phoneNumber.model';
import {CompanyModel} from './company.model';
import {FreelancerModel} from './freelancer.model';

export class Contact {
    public firstName: string;
    public infix: string;
    public surname: string;
    public addresses: AddressModel[];
    public emails: EmailModel[];
    public phonenumbers: PhoneNumberModel[];
    public contactID: number;
    public company: CompanyModel;
    public freelancer: FreelancerModel;
  //
  // constructor(firstName: string, infix: string, surname: string, addresses: AddressModel[], emails: EmailModel[],
  //             phoneNumbers: PhoneNumberModel[], contactID: number, companyFreelancer: ['bedrijf', 'freelancer'], cfDescription: string) {
  //   this.firstName = firstName
  //   this.infix = infix
  //   this.surname = surname
  //   this.addresses = addresses;
  //   this.emails = emails;
  //   this.phoneNumbers = phoneNumbers;
  //   this.contactID = contactID;
  //   this.companyFreelancer = companyFreelancer;
  //   this.cfDescription = cfDescription;
  // }

  public constructor(init?: Partial<Contact>) {
    Object.assign(this, init);
  }
}
