import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) {
  }

  ngOnInit() {
  }

  public logOut() {
    if (window.confirm('Weet u zeker dat u wilt uitloggen?')) {
      this.auth.logout();
      this.router.navigate(['login']);
    }
  }
}
