import {Component, OnInit} from '@angular/core';
import {Contact} from '../contact.model';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {ContactService} from '../contact.service';
import {AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ContactEmail} from '../contact-email';

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
    });
    this.addEmail();

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
        'email': new FormControl(null),
        'emailDescription': new FormControl(null)
      })
    );
    console.log('hier komt de emaildata');
    console.log(<FormArray>this.contactForm.controls['emails']);
  }

  removeEmail() {
    (<FormArray>this.contactForm.controls['emails']).removeAt(-1);

  }
}
