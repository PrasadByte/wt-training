import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetUser } from './Component/get-user/get-user';
import { CreateUser } from './Component/create-user/create-user';


const routes: Routes = [
  { path: 'all', component: GetUser }, 

  { path: 'create', component: CreateUser }, 
  { path: '', redirectTo: 'all', pathMatch: 'full' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
