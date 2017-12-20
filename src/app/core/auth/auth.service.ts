import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { environment } from '../../../environments/environment';

@Injectable()
export class AuthenticationService {
    public token: Object;
    private _url: string = `${environment.apiUrl}/api-token-auth/`

    constructor(private _http: HttpClient) {
        // set token if saved in local storage
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }
    // public login(username: string, password: string): Observable<Object> {
    //     let url: string = `${this._url}`;
    //     const body = { username: username, password: password };
    //     return this._http.post<Object>(url,body);

    // }

    public login2(username: string, password: string){
        this._http.post(this._url,JSON.stringify({ username: username, password: password }) )
        .subscribe(
            response => {            
                const token = response;
                if (token) {
                        // set token property
                    this.token = token;
                        // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));
                        // return true to indicate successful login
                     return true;
                    } else {
                            // return false to indicate failed login
                            return false;
                        }
        },
            err => console.log(err),
            () => console.log('Request Complete')
          );
        // .map((response: Response) => {
        //     // login successful if there's a jwt token in the response
        //     const token = response.json() && response.json().token;
        //     if (token) {
        //         // set token property
        //         this.token = token;

        //         // store username and jwt token in local storage to keep user logged in between page refreshes
        //         localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));

        //         // return true to indicate successful login
        //         return true;
        //     } else {
        //         // return false to indicate failed login
        //         return false;
        //     }
        // });
      }
     
    login(username: string, password: string): Observable<boolean> {
        let url: string = `${this._url}`;
        const body = { username: username, password: password };
        return this._http.post<Object>(url,body)
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                const token = response;
                if (token) {
                    // set token property
                    this.token = token;

                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));

                    // return true to indicate successful login
                    return true;
                } else {
                    // return false to indicate failed login
                    return false;
                }
            });
    }

    logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('currentUser');
    }
}
