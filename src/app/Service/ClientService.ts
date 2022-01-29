import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {User} from '../../Model/User';

// @ts-ignore
@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) {
  }

  url = environment.url + '/User';

  getListUser() {
    return this.http.get<User[]>(this.url + '/ListUser');
  }

}
