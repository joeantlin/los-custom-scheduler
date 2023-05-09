import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { EventManagerOverviewRoutingModule } from './event-manager-overview-routing.module';
import { EventManagerOverviewComponent } from './event-manager-overview.component';

@NgModule({
  declarations: [EventManagerOverviewComponent],
  imports: [CommonModule, EventManagerOverviewRoutingModule, MatButtonModule],
})
export class EventManagerOverviewModule {}
