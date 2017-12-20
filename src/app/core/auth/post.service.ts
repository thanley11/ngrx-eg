import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import { environment } from '../../../environments/environment';
 
import { AuthenticationService } from './auth.service';
import { User } from './user.model';
 
@Injectable()
export class PostService {

    private _url: string = `${environment.apiUrl}/posts`

    constructor(
        private http: Http,
        private authenticationService: AuthenticationService) {
    }
 
    getUsers(): Observable<User[]> {
        // add authorization header with jwt token
        let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
        let options = new RequestOptions({ headers: headers });
 
        // get users from api
        return this.http.get(this._url, options)
            .map((response: Response) => response.json());
    }
}