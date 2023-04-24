import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSpentComponent } from './delete-spent.component';

describe('DeleteSpentComponent', () => {
  let component: DeleteSpentComponent;
  let fixture: ComponentFixture<DeleteSpentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteSpentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteSpentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
