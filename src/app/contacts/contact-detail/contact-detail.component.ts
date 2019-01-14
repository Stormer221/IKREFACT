import {Component, OnInit} from '@angular/core';
import {Contact} from '../contact.model';
import {ContactService} from '../contact.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {
  contact: Contact;
  contactID: number;


  constructor(private contactService: ContactService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    // this.route.params.subscribe(
    //   (params: Params) => {
    //     this.contactID = +params['contactID'];
    //     this.contact = this.contactService.getContact(this.contactID);
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
        (contact: Contact) => this.contact = contact);

  }
  toFactuur() {
    this.router.navigate(['/invoice']);
  }

  toOfferte() {
    this.router.navigate(['/offerte']);
  }


  onEditContact() {
    this.router.navigate(['wijzigen'], {relativeTo: this.route});
  }
}
