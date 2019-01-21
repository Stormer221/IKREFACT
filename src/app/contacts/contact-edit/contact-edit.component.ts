import {Component, OnInit} from '@angular/core';
import {Contact} from '../contact.model';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {ContactService} from '../contact.service';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

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
      'contactData': new FormGroup({
        'firstName': new FormControl(),
        'infix': new FormControl(),
        'lastname': new FormControl()
      }),
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
        'email': new FormControl(),
        'emailDescription': new FormControl()
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
        'place': new FormControl(),
        'street': new FormControl(),
        'houseNumber': new FormControl(),
        'zipCode': new FormControl(),
        'country': new FormControl()
      })
    );
  }

  removeAddress() {
    (<FormArray>this.contactForm.controls['addresses']).removeAt(-1);
  }

  addPhoneNumber() {
    (<FormArray>this.contactForm.controls['phoneNumbers']).push(
      new FormGroup({
        'phoneNumber': new FormControl(null, Validators.required),
        'phoneNumberDescription': new FormControl(null)
      })
    );
  }

  removePhoneNumber() {
    (<FormArray>this.contactForm.controls['phoneNumbers']).removeAt(-1);
  }

  onSubmit() {
    this.newContact = new Contact(this.contactForm.value);
    // this.newContact.firstName = this.contactForm.get('firstName').value;
    // this.newContact.infix = this.contactForm.get('infix').value;
    // this.newContact.surname = this.contactForm.get('lastname').value;
    // this.newContact.addresses = this.contactForm.get('addresses').value;
    // this.newContact.emails = this.contactForm.get('emails').value;
    // this.newContact.phoneNumbers = this.contactForm.get('phoneNumbers').value;
    // this.newContact.companyFreelancer = this.contactForm.get('cfOption').value;
    // this.newContact.cfDescription = this.contactForm.get('cfDescription').value;
    console.log(this.contactForm);
    // console.log('submit dit form')
    // console.log('submit dit newContact')
    this.contactService.addContact(this.newContact);
    // this.contactForm.reset();
  }
}
