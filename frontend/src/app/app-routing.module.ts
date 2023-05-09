import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/feature/home.module').then(m => m.HomeModule),
  },
  {
    path: 'event-creator',
    loadChildren: () =>
      import(
        './event-creator/features/event-creator-shell/event-creator-shell.module'
      ).then(m => m.EventCreatorShellModule),
  },
  {
    path: 'event-manager',
    loadChildren: () =>
      import(
        './event-manager/features/event-manager-shell/event-manager-shell.module'
      ).then(m => m.EventManagerShellModule),
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
