import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalPageComponent } from './pages/principal-page/principal-page.component';
import { TaskPageComponent } from '../task/pages/task-page/task-page.component';

const routes: Routes = [
  {
    path: '',
    component: PrincipalPageComponent,
    children: [
      {
        path: 'task',
        loadChildren: () => import('../task/task.module').then(m => m.TaskModule)
      },
      {
        path: '**',
        redirectTo: 'task'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrincipalRoutingModule { }
