import { ErrorHandler, Injectable } from '@angular/core';
import { CustomErrorHandlerService } from './custom-error-handler.service';
import { ApiError } from './custom-error-handler.model';
import { Store } from '@ngrx/store';


@Injectable()
export class CustomErrorHandler implements ErrorHandler {

    constructor(
         private _store$: Store<any>,
         private logger: CustomErrorHandlerService) {}


    public handleError(error: any): void {
        this.logger.createLogMessage(this.toApiError(error))
            .then(res =>  console.log('CustomErrorHandler: Could not create log message'))
            .catch(err => console.log('CustomErrorHandler: Could not create log message'));

    }

    private toApiError(error: any): ApiError {
        let msg = error instanceof Error ? error.message : error.toString();
        let apiError = <ApiError>({
            message: msg || '',
            stackTrace: error.stack || ''
        });
        return apiError;
    }
}