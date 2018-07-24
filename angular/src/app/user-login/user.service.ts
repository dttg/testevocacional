import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserModel } from './user-model';
import { Observable, bindCallback, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import * as uuid from 'uuid/v4';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  validUser: UserModel;
  constructor(private http: HttpClient) {}

  identify(user: UserModel): Observable<UserModel> {
    user = {
      ...user,
      uuid: uuid(),
    };
    if (!(<any>window).analytics) {
      const msg = 'Segment snippet not included.';
      console.error(msg);
      return throwError(msg);
    }
    return bindCallback(
      (<(a, b, c, cb) => {}>(<any>window).analytics.identify)
    )(user.uuid, user, {}).pipe(
      map(response => {
        this.validUser = {
          ...user,
          response
        };
        return this.validUser;
      })
    );
  }

}
