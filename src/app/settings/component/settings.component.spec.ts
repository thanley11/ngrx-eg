import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsComponent } from './settings.component';

describe('GridComponent', () => {
  let component: GridComponent;
  let fixture: ComponentFixture<GridComponent>;
  let expectedOrder: Array<string>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridComponent);
    component = fixture.componentInstance;
    expectedOrder = ['fileI3d', 'file1'];
    component.status = expectedOrder;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check isBasketType ', () => {
            expect(component.isBasketType('basket')).toEqual(true);
            expect(component.isBasketType('blah')).toEqual(false);
  });

  it('should return the current status when close download ', (done) => {
          spyOn(component.closeDownload, 'emit');
           let nativeElement = fixture.nativeElement;
        let button = nativeElement.querySelector('div.orderClose');
        button.dispatchEvent(new Event('click'));
         fixture.detectChanges();
          expect(component.closeDownload.emit).toHaveBeenCalledWith('fileI3d');
          done();
            // component.closeDownload.subscribe(event => {
            //    expect(event).toEqual(['badId']);
            // });
            //component.closeDownload(closeDownload);
  });
})
