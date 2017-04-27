
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { Component } from '@angular/core';
import { CustomErrorHandler } from './custom-error-handler';
import { CustomErrorHandlerService } from './custom-error-handler.service';

const ERROR_MESSAGE = 'Dummy Error';

@Component({
//   moduleId: module.id,
  selector: 'app-dummy-component',
  template: `<button (click)="throwError()">Throw an error</button>`
})
export class MockComponent {

  public throwError(): never {
    throw Error(ERROR_MESSAGE);
  }

}

describe('Global Error Handler', () => {

  let fixture: ComponentFixture<MockComponent>;
 // let logger: CustomErrorHandlerService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MockComponent],
      providers: [
        CustomErrorHandler,
        CustomErrorHandlerService
      ],
    });
    //.compileComponents();
    fixture = TestBed.createComponent(MockComponent);
  }));

      describe('Error Handler logging', () => {

      let loggerSpy: jasmine.Spy;
      let consoleSpy: jasmine.Spy;
      let errorObservableSpy: jasmine.Spy;

      beforeEach(() => {

        //loggerSpy  = spyOn(logger, 'createLogMessage').and.callThrough();
        consoleSpy = spyOn(console, 'error');

        errorObservableSpy = jasmine.createSpy('log event observable subscription');
       // logger.getLogEventObserver().subscribe(errorObservableSpy);

        // trigger the error
        fixture.nativeElement.querySelector('button').click();
      });

    //   it('should log error to the logger util', () => {
    //     expect(loggerSpy).toHaveBeenCalledWith(jasmine.any(Error), ERROR_MESSAGE);
    //   });

      it('should log error to console', () => {
        expect(consoleSpy).toHaveBeenCalled();
      });

    //   it('should have ticked the error stream which will pop error to user', () => {
    //     expect(errorObservableSpy).toHaveBeenCalled();
    //   });

    });

});
