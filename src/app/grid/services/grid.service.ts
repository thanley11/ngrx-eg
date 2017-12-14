//=============================================================================
// grid.service.ts
//=============================================================================

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

//import { APP_SETTINGS } from '../../app/app.index';
import { Settings } from '../settings.model'

@Injectable()
export class SettingsService {

    private _url: string = `${environment.apiUrl}/settings`

    constructor(private _http: HttpClient) { }

    public getSettings(): Observable<Settings[]> {
        let url: string = `${this._url}`;

        return this._http.get<Settings[]>(url);
    }

   /* public retrieveBook(volumeId: string): Observable<Book> {*/
        //return this.http.get<Book>(`${this.API_PATH}/${volumeId}`);
/*}*/
}

