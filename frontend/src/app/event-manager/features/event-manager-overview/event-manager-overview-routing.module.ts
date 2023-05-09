import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventManagerOverviewComponent } from './event-manager-overview.component';

const routes: Routes = [
  {
    path: '',
    component: EventManagerOverviewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class EventManagerOverviewRoutingModule {}
