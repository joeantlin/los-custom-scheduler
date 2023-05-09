import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: ':type',
    loadChildren: () =>
      import('../event-creator-overview/event-creator-overview.module').then(
        m => m.EventCreatorOverviewModule
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('../event-creator-overview/event-creator-overview.module').then(
        m => m.EventCreatorOverviewModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventCreatorShellRouting {}
