import { Routes } from '@angular/router';
import { About } from './component/about/about';
import { Contact } from './component/contact/contact';
import { PageNotFound } from './component/page-not-found/page-not-found';
import { Header } from './component/header/header';
import { CreateUser } from './component/create-user/create-user';
import { GeUser } from './component/ge-user/ge-user';

export const routes: Routes = [
  { path: 'about', component: About },
  { path: 'contact', component: Contact },
  { path: 'add', component: CreateUser },
  { path: 'get', component: GeUser },


  { path: '', redirectTo: '/about', pathMatch: 'full' },  // Redirect root to a default page

  { path: '**', component: PageNotFound }
];
