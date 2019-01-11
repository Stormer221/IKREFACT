import { Component, OnInit } from '@angular/core';
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
  id: number;


  constructor(private contactService: ContactService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.contact = this.contactService.getContact(this.id);
      }
    );
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
