import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaPollComponent } from './consulta-poll.component';

describe('ConsultaPollComponent', () => {
  let component: ConsultaPollComponent;
  let fixture: ComponentFixture<ConsultaPollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaPollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaPollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
