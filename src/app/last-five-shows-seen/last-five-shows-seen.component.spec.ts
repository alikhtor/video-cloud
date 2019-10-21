import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastFiveShowsSeenComponent } from './last-five-shows-seen.component';

describe('LastFiveShowsSeenComponent', () => {
  let component: LastFiveShowsSeenComponent;
  let fixture: ComponentFixture<LastFiveShowsSeenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastFiveShowsSeenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastFiveShowsSeenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
