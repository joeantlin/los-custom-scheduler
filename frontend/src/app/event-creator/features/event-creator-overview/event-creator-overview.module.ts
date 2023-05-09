import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventCreatorOverviewRoutingModule } from './event-creator-overview-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { EventCreatorOverviewComponent } from './event-creator-overview.component';

@NgModule({
  declarations: [EventCreatorOverviewComponent],
  imports: [CommonModule, EventCreatorOverviewRoutingModule, MatButtonModule],
})
export class EventCreatorOverviewModule {}
