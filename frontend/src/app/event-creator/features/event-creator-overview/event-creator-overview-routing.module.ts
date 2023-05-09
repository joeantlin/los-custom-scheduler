import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventCreatorOverviewComponent } from './event-creator-overview.component';

const routes: Routes = [
  {
    path: '',
    component: EventCreatorOverviewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class EventCreatorOverviewRoutingModule {}
