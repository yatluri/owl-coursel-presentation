import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CourselComponent } from './coursel/coursel.component';

const routes: Routes = [
  {
    path: 'coursel',
    component: CourselComponent
  },
  {
    path: '**',
    redirectTo: 'coursel'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRouteConfig {}
