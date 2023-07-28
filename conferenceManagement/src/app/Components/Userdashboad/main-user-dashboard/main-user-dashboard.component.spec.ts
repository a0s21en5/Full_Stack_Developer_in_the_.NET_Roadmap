import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainUserDashboardComponent } from './main-user-dashboard.component';

describe('MainUserDashboardComponent', () => {
  let component: MainUserDashboardComponent;
  let fixture: ComponentFixture<MainUserDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainUserDashboardComponent]
    });
    fixture = TestBed.createComponent(MainUserDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
