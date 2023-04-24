import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSpentsComponent } from './list-spents.component';

describe('ListSpentsComponent', () => {
  let component: ListSpentsComponent;
  let fixture: ComponentFixture<ListSpentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSpentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListSpentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
