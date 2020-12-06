import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'page-status',
    pathMatch: 'full'
  },
  {
    path: 'page-config',
    loadChildren: () => import('./page-config/page-config.module').then( m => m.PageConfigPageModule)
  },
  {
    path: 'page-patients',
    loadChildren: () => import('./page-patients/page-patients.module').then( m => m.PagePatientsPageModule)
  },
  {
    path: 'page-status',
    loadChildren: () => import('./page-status/page-status.module').then( m => m.PageStatusPageModule)
  },
  {
    path: 'page-edit-toma',
    loadChildren: () => import('./page-edit-toma/page-edit-toma.module').then( m => m.PageEditTomaPageModule)
  },
  {
    path: 'page-edit-pill',
    loadChildren: () => import('./page-edit-pill/page-edit-pill.module').then( m => m.PageEditPillPageModule)
  },
  {
    path: 'page-log',
    loadChildren: () => import('./page-log/page-log.module').then( m => m.PageLogPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
