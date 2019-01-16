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
  contactFormItem: FormGroup;

  constructor(private fb: FormBuilder, private contactService: ContactService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.contactForm = new FormGroup({
      'contactData': new FormGroup({
        'name': new FormControl(null, [Validators.required]),
        'infix': new FormControl(null),
        'lastname': new FormControl(null, [Validators.required])
      }),
      'addressData': new FormGroup({
        'zipCode': new FormControl(null),
        'place': new FormControl(null),
        'street': new FormControl(null),
        'housenumber': new FormControl(null)
      }),
      'telephoneData': new FormGroup({
        'telephoneNumber': new FormControl(null, [Validators.required]),
        'telephoneDescription': new FormControl(null)
      }),
      'emailAddresses': new FormArray([this.createEmail()])
  });
    console.log('formgroupshitklaar');
    // if (this.newContact) {
    //   console.log('contact zoeken:')
    //   this.route.params.subscribe(
    //     (params: Params) => {
    //       this.id = +params['id'];
    //       this.contact = this.contactService.getContact(this.id);
    //       console.log('init contact-edit contact id: ' + this.id);
    //     }
    //   );

    // }
  }
  
  toContacts() {
    this.router.navigate(['/contacten']);
  }

  onSubmit() {
    console.log(this.contactForm);
    this.contactForm.reset();
  }
  
  addEmail() {
    (<FormArray>this.contactForm.get('emailAdresses')).push(this.createEmail());
  }

   createEmail() {
    return this.fb.group({
      'email': 'email',
      'emailDescription': 'email beschrijving',
    });
  }
}
