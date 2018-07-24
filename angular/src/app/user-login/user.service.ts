import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserModel } from './user-model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as uuid from 'uuid/v4';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  validUser: UserModel;
  constructor(private http: HttpClient) {}

  registerUser(user: UserModel): Observable<UserModel> {
    user = {
      ...user,
      uuid: uuid(),
    };
    const identity = {
      'anonymousId': user.uuid,
      'traits': user,
      'timestamp': (new Date()).toISOString(),
    };

    return this.http.post<UserModel>('https://api.segment.io/v1/identify', identity, {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic ' + btoa('bU47cVjNeNNZiqAcIZ72D6SZG4PzGZAC' + ':' + '')
      })
    }).pipe(
      map(response => {
        if (!this.isValidUser(response)) {
          throw Error('Usuario Inválido');
        }
        this.validUser = response;
        return response;
      })
    );
  }

  isValidUser(user: UserModel) {
    return user.uuid === this.validUser.uuid;
  }
}
