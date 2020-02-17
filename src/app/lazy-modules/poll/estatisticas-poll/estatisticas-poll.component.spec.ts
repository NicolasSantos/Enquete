import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstatisticasPollComponent } from './estatisticas-poll.component';

describe('EstatisticasPollComponent', () => {
  let component: EstatisticasPollComponent;
  let fixture: ComponentFixture<EstatisticasPollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstatisticasPollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstatisticasPollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
