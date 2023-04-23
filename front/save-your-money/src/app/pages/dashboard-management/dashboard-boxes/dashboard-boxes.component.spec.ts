import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardBoxesComponent } from './dashboard-boxes.component';

describe('DashboardBoxesComponent', () => {
  let component: DashboardBoxesComponent;
  let fixture: ComponentFixture<DashboardBoxesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardBoxesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardBoxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
