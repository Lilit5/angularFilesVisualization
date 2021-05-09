import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseOsScreenComponent } from './choose-os-screen.component';

describe('ChooseOsScreenComponent', () => {
  let component: ChooseOsScreenComponent;
  let fixture: ComponentFixture<ChooseOsScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseOsScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseOsScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
