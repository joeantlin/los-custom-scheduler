import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventCreatorOverviewComponent } from './event-creator-overview.component';

describe('EventCreatorOverviewComponent', () => {
  let component: EventCreatorOverviewComponent;
  let fixture: ComponentFixture<EventCreatorOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EventCreatorOverviewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EventCreatorOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
