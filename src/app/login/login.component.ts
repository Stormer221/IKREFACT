import {Component, OnInit} from '@angular/core';
import {User} from '../User';
import {AuthService} from '../auth.service';

/**
 * The Login Component.
 *
 * Login the user.
 *
 * @author Sergi Philipsen, Tim Vermaat, Tom de Jong
 */

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user: User = new User();

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
  }

  onSubmit() {
    this.authService.loginUser(this.user);
  }
}

