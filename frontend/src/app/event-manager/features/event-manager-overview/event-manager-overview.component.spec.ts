import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventManagerOverviewComponent } from './event-manager-overview.component';

describe('EventManagerOverviewComponent', () => {
  let component: EventManagerOverviewComponent;
  let fixture: ComponentFixture<EventManagerOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventManagerOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventManagerOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
