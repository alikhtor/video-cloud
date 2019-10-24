import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastShowsListComponent } from './last-shows-list.component';

describe('LastShowsListComponent', () => {
  let component: LastShowsListComponent;
  let fixture: ComponentFixture<LastShowsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastShowsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastShowsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
