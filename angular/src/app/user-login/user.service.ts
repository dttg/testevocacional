import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from './user-model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  validUser: UserModel;
  constructor(private http: HttpClient) {}

  registerUser(user: UserModel): Observable<UserModel> {
    return this.http.post<UserModel>('https://jsonplaceholder.typicode.com/posts', user).pipe(
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
    return user.id > 0;
  }
}
