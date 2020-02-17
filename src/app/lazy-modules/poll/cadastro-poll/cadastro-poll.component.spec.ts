import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroPollComponent } from './cadastro-poll.component';

describe('CadastroPollComponent', () => {
  let component: CadastroPollComponent;
  let fixture: ComponentFixture<CadastroPollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroPollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroPollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
