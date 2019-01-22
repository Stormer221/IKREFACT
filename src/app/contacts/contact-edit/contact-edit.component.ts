import {Component, OnInit} from '@angular/core';
import {Contact} from '../contact.model';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {ContactService} from '../contact.service';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {FreelancerModel} from '../freelancer.model';
import {CompanyModel} from '../company.model';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css'],
  providers: [ContactService]
})
export class ContactEditComponent implements OnInit {
  id: number;
  newContact: Contact;
  contactForm: FormGroup;
  companyFreelancerOptions = ['bedrijf', 'freelancer'];

  constructor(private fb: FormBuilder, private contactService: ContactService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.contactForm = new FormGroup({
      'firstName': new FormControl('Tom'),
      'infix': new FormControl('de'),
      'surname': new FormControl('Jong'),
      'emails': new FormArray([]),
      'addresses': new FormArray([]),
      'phoneNumbers': new FormArray([]),
      'cfOption': new FormControl(),
      'cfDescription': new FormControl()
    });
    this.addEmail();
    this.addAddress();
    this.addPhoneNumber();

  }

  toContacts() {
    this.router.navigate(['/contacten']);
  }

  addEmail() {
    (<FormArray>this.contactForm.controls['emails']).push(
      new FormGroup({
        'email': new FormControl('dejongtom01@gmail.com'),
        'emailDescription': new FormControl('privemail')
      })
    );
    console.log(this.contactForm);
  }

  removeEmail() {
    (<FormArray>this.contactForm.controls['emails']).removeAt(-1);
  }

  addAddress() {
    (<FormArray>this.contactForm.controls['addresses']).push(
      new FormGroup({
        'residence': new FormControl('Leiden'),
        'street': new FormControl('Boerhaavelaan'),
        'houseNumber': new FormControl('28'),
        'zipCode': new FormControl('2334 EP'),
        'country': new FormControl('NL'),
        'addressDescription': new FormControl('thuis')
      })
    );
  }

  removeAddress() {
    (<FormArray>this.contactForm.controls['addresses']).removeAt(-1);
  }

  addPhoneNumber() {
    (<FormArray>this.contactForm.controls['phoneNumbers']).push(
      new FormGroup({
        'phoneNumber': new FormControl('634870687', Validators.required),
        'phoneNumberDescription': new FormControl('mobiel nummer')
      })
    );
  }

  removePhoneNumber() {
    (<FormArray>this.contactForm.controls['phoneNumbers']).removeAt(-1);
  }

  onSubmit() {
    this.newContact = new Contact(this.contactForm.value);
    // if (this.contactForm.get('cfOption').value === 'freelancer') {
    //   this.newContact.freelancer = new FreelancerModel(this.contactForm.get('cfDescription').value);
    // }
    // if (this.contactForm.get('cfOption').value === 'bedrijf') {
    //   this.newContact.company = new CompanyModel(this.contactForm.get('cfDescription').value);
    // }
    // this.contactForm.setControl('cfOption', null);
    // this.contactForm.setControl('cfDescription', null);
    console.log('nieuw Contact: ');
    console.log(this.newContact);
    // console.log('contact Form: ');
    // console.log(this.contactForm);
    this.contactService.addContact(this.newContact).subscribe();
    // this.contactForm.reset();
  }
}
