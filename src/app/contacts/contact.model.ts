import {AddressModel} from './address.model';
import {EmailModel} from './email.model';
import {PhoneNumber} from './phoneNumber';
import {CompanyModel} from './company.model';
import {FreelancerModel} from './freelancer.model';

export class Contact {
    public firstName: string;
    public infix: string;
    public surname: string;
    public addresses: AddressModel[];
    public emails: EmailModel[];
    public phoneNumbers: PhoneNumber[];
    public contactID: number;
    public cfOption: string;
    public cfDescription: string;
    public company: CompanyModel;
    public freelancer: FreelancerModel;
    
  public constructor(init?: Partial<Contact>) {
    Object.assign(this, init);
    if (init.cfOption === 'Bedrijf') {
      this.freelancer = null;
      this.company = new CompanyModel(this.cfDescription);
    }
    if (init.cfOption === 'Freelancer') {
      this.company = null;
      this.freelancer = new FreelancerModel(this.cfDescription);
    }
  }
}
