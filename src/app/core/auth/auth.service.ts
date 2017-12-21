import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { environment } from '../../../environments/environment';
import { Token } from './token.model';

@Injectable()
export class AuthenticationService {
    public token: string;
    private _url: string = `${environment.apiUrl}/api-token-auth/`

    constructor(private _http: HttpClient) {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }
    
    login(username: string, password: string): Observable<boolean> {
        let url: string = `${this._url}`;
        const body = { username: username, password: password };
        return this._http.post<Token>(url,body)
            .map((token: Token) => {
                if (token) {
                    this.token = token.token;
                    localStorage.setItem('currentUser', JSON.stringify({ username: username, token: this.token }));
                    return true;
                } else {
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
