import {Component, OnInit} from '@angular/core';
import {Contact} from '../contact.model';
import {ContactService} from '../contact.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css'],
  providers: [ContactService]
})
export class ContactDetailComponent implements OnInit {
  contact: Contact;
  contactID: number;
  email: string[];


  constructor(private contactService: ContactService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    // this.route.params.subscribe(
    //   (params: Params) => {
    //     this.contactID = +params['contactID'];
    //     this.newContact = this.contactService.getContact(this.contactID);
    //   }
    // );
    this.route.params
      .subscribe(
        (params: Params) => {
          this.contact = this.route.snapshot.data.params;
          console.log(params);
          this.getContact(params);
        }
      );

  }

  getContact(params: Params) {
    this.contactService.getSingleContact(params['contactID'])
      .subscribe(
        (contact: Contact) => {
          this.contact = contact;
          console.log(contact);


        });
    // this.newContact = this.contactService.getContact(this.contactID);

  }

  deleteContact() {
    this.contactService.deleteContact(this.contact.contactID).subscribe();
    setTimeout(() => {
      this.router.navigate(['/contacten']);
    }, 500);

  }

  onEditContact() {
    this.router.navigate(['wijzigen'], {relativeTo: this.route});

  }
}
