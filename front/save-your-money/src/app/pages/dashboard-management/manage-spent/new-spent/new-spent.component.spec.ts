import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSpentComponent } from './new-spent.component';

describe('NewSpentComponent', () => {
  let component: NewSpentComponent;
  let fixture: ComponentFixture<NewSpentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewSpentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewSpentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
