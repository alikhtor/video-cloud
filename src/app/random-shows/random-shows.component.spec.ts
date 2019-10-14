import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomShowsComponent } from './random-shows.component';

describe('RandomShowsComponent', () => {
  let component: RandomShowsComponent;
  let fixture: ComponentFixture<RandomShowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomShowsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomShowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
