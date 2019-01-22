import {AfterContentInit, Component, OnInit} from '@angular/core';
import {Contact} from '../contact.model';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {ContactService} from '../contact.service';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {EmailModel} from '../email.model';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css'],
  providers: [ContactService]
})
export class ContactEditComponent implements OnInit, AfterContentInit {
  id: number;
  index: number;
  oldContact: Contact;
  newContact: Contact;
  contactForm: FormGroup;
  companyFreelancerOptions = ['bedrijf', 'freelancer'];

  constructor(private fb: FormBuilder, private contactService: ContactService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.getContact(params);
        }
      );

    this.contactForm = new FormGroup({
      'firstName': new FormControl(),
      'infix': new FormControl(),
      'surname': new FormControl(),
      'emails': new FormArray([]),
      'addresses': new FormArray([]),
      'phoneNumbers': new FormArray([]),
      'cfOption': new FormControl(),
      'cfDescription': new FormControl()
    });
    this.addEmail();
    this.addAddress();
    this.addPhoneNumber();

    if (this.oldContact) {
      this.contactForm.controls['firstName'].setValue(this.oldContact.firstName);
      this.contactForm.controls['infix'].setValue(this.oldContact.infix);
      this.contactForm.controls['surname'].setValue(this.oldContact.surname);
    }

  }

  ngAfterContentInit() {
    console.log('afterInit')
    console.log(this.oldContact);
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
    console.log(this.oldContact);
  }

  removeEmail() {
    (<FormArray>this.contactForm.controls['emails']).removeAt(-1);
  }

  addAddress() {
    (<FormArray>this.contactForm.controls['addresses']).push(
      new FormGroup({
        'residence': new FormControl(),
        'street': new FormControl(),
        'houseNumber': new FormControl(),
        'zipCode': new FormControl(),
        'country': new FormControl(),
        'addressDescription': new FormControl()
      })
    );
  }

  removeAddress() {
    (<FormArray>this.contactForm.controls['addresses']).removeAt(-1);
  }

  addPhoneNumber() {
    (<FormArray>this.contactForm.controls['phoneNumbers']).push(
      new FormGroup({
        'phoneNumber': new FormControl(),
        'phoneNumberDescription': new FormControl()
      })
    );
  }

  removePhoneNumber() {
    (<FormArray>this.contactForm.controls['phoneNumbers']).removeAt(-1);
  }

  onSubmit() {
    if ( this.contactForm.valid ) {
      this.newContact = new Contact(this.contactForm.value);
      this.contactService.addContact(this.newContact).subscribe();
      this.contactForm.reset();
      this.toContacts();
    }
  }

  getContact(params: Params) {
    this.contactService.getSingleContact(params['contactID'])
      .subscribe(
        (contact: Contact) => {
          this.oldContact = contact;
          this.fillForm(this.oldContact);
        });
  }

  private fillForm(contact: Contact) {
    this.contactForm.controls['firstName'].setValue(contact.firstName);
    this.contactForm.controls['infix'].setValue(contact.infix);
    this.contactForm.controls['surname'].setValue(contact.surname);

    for ( this.index = -1; this.index < contact.emails.length ; this.index++ ) {
      (<FormArray>this.contactForm.controls['emails']).push(
        new FormGroup({
          'phoneNumber': new FormControl(),
          'phoneNumberDescription': new FormControl()
        })
      );
    }
    // let email of contact.emails {}
  }
}
