import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeTeamPage } from './see-team.page';

describe('SeeTeamPage', () => {
  let component: SeeTeamPage;
  let fixture: ComponentFixture<SeeTeamPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeeTeamPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeTeamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
