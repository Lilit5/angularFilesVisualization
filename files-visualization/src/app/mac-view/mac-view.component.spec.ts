import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MacViewComponent } from './mac-view.component';

describe('MacViewComponent', () => {
  let component: MacViewComponent;
  let fixture: ComponentFixture<MacViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MacViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MacViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
