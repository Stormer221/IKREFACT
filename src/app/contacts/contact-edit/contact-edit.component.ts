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
  newContact = true;
  id: number;
  contact: Contact;
  contactForm: FormGroup;
  companyFreelancerOptions = ['company', 'freelancer'];

  constructor(private fb: FormBuilder, private contactService: ContactService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.contactForm = new FormGroup({
      'contactData': new FormGroup({
        'name': new FormControl(null, [Validators.required]),
        'infix': new FormControl(null),
        'lastname': new FormControl(null, [Validators.required])
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

  onSubmit() {
    console.log(this.contactForm);
    this.contactForm.reset();
  }

  addEmail() {
    (<FormArray>this.contactForm.controls['emails']).push(
      new FormGroup({
        'email': new FormControl(null, Validators.required),
        'emailDescription': new FormControl(null)
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
        'place': new FormControl(null, Validators.required),
        'street': new FormControl(null),
        'houseNumber': new FormControl(null),
        'zipCode': new FormControl(null),
        'country': new FormControl(null)
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


}
