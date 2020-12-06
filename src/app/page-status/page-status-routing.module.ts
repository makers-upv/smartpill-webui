import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageStatusPage } from './page-status.page';

const routes: Routes = [
  {
    path: '',
    component: PageStatusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageStatusPageRoutingModule {}
