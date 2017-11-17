import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ApiError } from './custom-error-handler.model';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CustomErrorHandlerService {

     private _url: string = `/api/log`;

     constructor(private http: Http) {}

     public createLogMessage(error: ApiError): Promise<any> {
        let url = `${this._url}`;

        let body = JSON.stringify(error);
        return this.http.post(url, body)
           .toPromise()
           .then(function(res) { return res; })
           .catch(err =>
                console.log('Error sending log message')
            );
    }
}