import { CustomErrorHandlerService } from './custom-error-handler.service';
import { TestBed, async, getTestBed } from '@angular/core/testing';
import { MockBackend, MockConnection } from '@angular/http/testing';
import {
    BaseRequestOptions, Http, XHRBackend, HttpModule, ResponseOptions, Response
}
from '@angular/http';
import { ApiError } from './custom-error-handler.model';

describe('Service: CustomErrorHandlerService', () => {
    let logService: CustomErrorHandlerService;
    let mockBackend: MockBackend;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [
                CustomErrorHandlerService,
                MockBackend,
                BaseRequestOptions,
                {
                    provide: Http,
                    deps: [MockBackend, BaseRequestOptions],
                    useFactory:
                        (backend: XHRBackend, defaultOptions: BaseRequestOptions) => {
                            return new Http(backend, defaultOptions);
                        }
                }
            ],
            imports: [
                HttpModule
            ]
        }).compileComponents().then(function(arr) {
            logService = getTestBed().get(CustomErrorHandlerService);
            mockBackend = getTestBed().get(MockBackend);
        });
    }));

    function setupConnections(backend: MockBackend, options: any) {
        backend.connections.subscribe((connection: MockConnection) => {
            const responseOptions = new ResponseOptions(options);
            const response = new Response(responseOptions);

            connection.mockRespond(response);
        });
    }

    it('should create log message', async(() => {
        setupConnections(mockBackend, {
            body: 'Log message successfully saved!',
            status: 200
        });

        let testError = new ApiError();

        testError.message = 'Error occurred';
        testError.stackTrace = 'Stacktrace message';

        logService.createLogMessage(testError)
            .then(function(res) {
                expect(res.status).toBe(200);
                expect(res._body).toEqual('Log message successfully saved!');
            });
    }));
});