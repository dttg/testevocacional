import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  MatCardModule,
  MatCheckboxModule,
  MatGridListModule,
  MatIconModule,
  MatButtonModule,
  MatInputModule,
} from '@angular/material';

import { UserLoginComponent } from './user-login.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    RouterModule,
  ],
  declarations: [
    UserLoginComponent,
  ],
  exports: [
    UserLoginComponent,
  ],
})
export class UserLoginModule { }

export { UserLoginComponent } from './user-login.component';
