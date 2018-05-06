import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiasecComponent } from './riasec.component';

describe('RiasecComponent', () => {
  let component: RiasecComponent;
  let fixture: ComponentFixture<RiasecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiasecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiasecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
