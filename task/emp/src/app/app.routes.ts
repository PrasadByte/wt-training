import { RedirectCommand, Routes } from '@angular/router';
import { CreateUser } from './component/create-user/create-user';
import { GetUser } from './component/get-user/get-user';
import { Home } from './component/home/home';
import { UpdateUser } from './component/update-user/update-user';





export const routes: Routes = [
  //  { path: '', redirectTo: 'get', pathMatch: 'full' },

 { path: 'get', component: GetUser },
{path:'add', component:CreateUser},
{path:'home',component:Home},
{ path: '', redirectTo: 'home', pathMatch: 'full' },
// {path:'update', component:UpdateUser}
{ path: 'update/:id', component: UpdateUser }




]
