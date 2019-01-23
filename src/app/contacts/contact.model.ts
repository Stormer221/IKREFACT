import {AddressModel} from './address.model';
import {EmailModel} from './email.model';
import {Phonenumbers} from './phonenumbers';
import {CompanyModel} from './company.model';
import {FreelancerModel} from './freelancer.model';

export class Contact {
    public firstName: string;
    public infix: string;
    public surname: string;
    public addresses: AddressModel[];
    public emails: EmailModel[];
    public phoneNumbers: Phonenumbers[];
    public contactID: number;
    public company: CompanyModel;
    public freelancer: FreelancerModel;


  public constructor(init?: Partial<Contact>) {
    Object.assign(this, init);
  }
}
