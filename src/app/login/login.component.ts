import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
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
  private loginForm: FormGroup;
  private user: User = new User();

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
  }

  onSubmit() {
    this.authService.loginUser(this.user);
  }
}

