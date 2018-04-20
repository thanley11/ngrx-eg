import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { environment } from '../../../environments/environment';
import { Token } from './token.model';
import { JwtHelperService   } from '@auth0/angular-jwt';

@Injectable()
export class AuthenticationService {
    public token: string;
    private _url: string = `${environment.apiUrl}/api-token-auth/`

    constructor(private _http: HttpClient, private _helper: JwtHelperService) {
        // const currentUser = JSON.parse(localStorage.getItem('accessToken'));
        // this.token = currentUser && currentUser.token;
    }

    login(username: string, password: string): Observable<boolean> {
        let url: string = `${this._url}`;
        const body = { username: username, password: password };
        return this._http.post<Token>(url, body)
            .map((token: Token) => {
                if (token) {
                    localStorage.setItem('accessToken', token.access_token );
                    return true;
                } else {
                    return false;
                }
            })
            .catch(() => {
                return Observable.of(false);
            });
    }

    logout(): void {
        this.token = null;
        localStorage.removeItem('accessToken');
    }


    // loggedIn() {
    //   return this._helper.isTokenExpired('accessToken');
    // }

    loggedIn() {
        const token: string = localStorage.getItem('accessToken');
        return token != null && !this._helper.isTokenExpired(token);
    }
}
