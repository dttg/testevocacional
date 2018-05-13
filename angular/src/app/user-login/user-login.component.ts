import { Component, OnInit, HostBinding } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

import { UserService } from './user.service';
import { slideInDownAnimation } from '../animations/router-animation';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss'],
  animations: [slideInDownAnimation]
})
export class UserLoginComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  // @HostBinding('style.position') position = 'absolute';

  form: FormGroup;
  sent = false;

  constructor(
    private router: Router,
    private userService: UserService,
    private formBuilder: FormBuilder,
    public snackBar: MatSnackBar
  ) {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      newsletter: true
    });
  }

  ngOnInit() {}

  registerUser() {
    const user = this.form.value;
    this.sent = true;
    this.userService.registerUser(user).subscribe(
      response => {
        this.openSnackBar(`Bem-vindo ${response.name}.`, 'Ok');
        this.router.navigate(['/questoes']);
      },
      error => {
        this.sent = false;
        this.openSnackBar('Não foi possivel fazer seu Login', 'Ok');
      },
      () => (this.sent = false)
    );
    // /questoes
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000
    });
  }
}
