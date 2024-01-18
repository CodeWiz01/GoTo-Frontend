import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindComponent } from './modules/find/find.component';

const routes: Routes = [
  {
    path:'',
    component:FindComponent,
    loadChildren:()=>import('./modules/find/find.module').then(a=>a.FindModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
