//=============================================================================
// sidebar.service.ts
//=============================================================================

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

//import { APP_SETTINGS } from '../../app/app.index';

@Injectable()
export class SidebarService {

    private _url: string = `/api/sidebar`;

    constructor(private _http: Http) { }

    public getGrid(contentId: string): Observable<Response> {
        let url: string = `${this._url}/${contentId}`;

        return this._http.get(url);
    }
}

