import {Component, OnInit} from '@angular/core';
import {Contact} from '../contact.model';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {ContactService} from '../contact.service';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {EmailModel} from '../email.model';
import {Observable, of} from 'rxjs';
import {Phonenumbers} from '../phonenumbers';
import index from '@angular/cli/lib/cli';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css'],
  providers: [ContactService]
})
export class ContactEditComponent implements OnInit {
  id: number;
  contact: Contact;
  contactForm: FormGroup;
  companyFreelancerOptions = ['bedrijf', 'freelancer'];
  emailModel: EmailModel;

  constructor(private fb: FormBuilder, private contactService: ContactService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.contactForm = new FormGroup({
      'firstName': new FormControl(),
      'infix': new FormControl(),
      'surname': new FormControl(),
      'emails': new FormArray([]),
      'addresses': new FormArray([]),
      'phonenumbers': new FormArray([]),
      'cfOption': new FormControl(),
      'cfDescription': new FormControl()
    });
    this.addEmail();
    this.addAddress();
    this.addPhoneNumber();
    if (this.route.snapshot.params['contactID'] > '0') {
      this.route.params
        .subscribe(
          (params: Params) => {
            this.fillContactInformation(params);
          });
    }
  }

  private fillContactInformation(params: Params) {
    this.contactService.getSingleContact(params['contactID'])
      .subscribe(
        (contact: Contact) => {
          this.contact = contact;
          this.contactForm.controls['firstName'].setValue(this.contact.firstName);
          this.contactForm.controls['infix'].setValue(this.contact.infix);
          this.contactForm.controls['surname'].setValue(this.contact.surname);
          for (const index in this.contact.addresses) {
            if (!(<FormArray>this.contactForm.controls['addresses']).at(+index)) {
              this.addAddress();
            }
            (<FormArray>this.contactForm.controls['addresses']).at(+index).patchValue(
              this.contact.addresses[index]);
          }
          for (const index in this.contact.phoneNumbers) {
            if (!(<FormArray>this.contactForm.controls['phonenumbers']).at(+index)) {
              this.addPhoneNumber();
            }
            (<FormArray>this.contactForm.controls['phonenumbers']).at(+index).patchValue(
              this.contact.phoneNumbers[index]);
          }
          for (const index in this.contact.emails) {
            if (!(<FormArray>this.contactForm.controls['emails']).at(+index)) {
              this.addEmail();
            }
            (<FormArray>this.contactForm.controls['emails']).at(+index).patchValue(
              this.contact.emails[index]);
          }
        }
      );
  }

  addEmail() {
    (<FormArray>this.contactForm.controls['emails']).push(
      new FormGroup({
        'email': new FormControl(),
        'emailDescription': new FormControl()
      })
    );
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
    (<FormArray>this.contactForm.controls['phonenumbers']).push(
      new FormGroup({
        'phoneNumber': new FormControl(),
        'phoneNumberDescription': new FormControl()
      })
    );
  }

  removePhoneNumber() {
    (<FormArray>this.contactForm.controls['phonenumbers']).removeAt(-1);
  }

  toContacts() {
    this.router.navigate(['/contacten']);
  }

  onSubmit() {
    if ( this.contactForm.valid ) {
      if (!this.contact) {
      this.contact = new Contact(this.contactForm.value);
      this.contactService.addContact(this.contact).subscribe();
      this.contactForm.reset();
      this.toContacts();
      } else {
        this.contactService.editContact(this.contact).subscribe();
        this.router.navigate(['../'], {relativeTo: this.route});
      }
    }
  }
}
