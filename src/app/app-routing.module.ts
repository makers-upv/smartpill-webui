import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'page-login',
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
  },
  {
    path: 'page-login',
    loadChildren: () => import('./page-login/page-login.module').then( m => m.PageLoginPageModule)
  },
  {
    path: 'pill/edit/:postId',
    loadChildren:() => import('./page-edit-pill/page-edit-pill.module').then( m => m.PageEditPillPageModule)
  },  {
    path: 'page-edit-dosis',
    loadChildren: () => import('./page-edit-dosis/page-edit-dosis.module').then( m => m.PageEditDosisPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
