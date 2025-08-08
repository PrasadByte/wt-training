import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { HttpClientModule } from '@angular/common/http';
import { GetUser } from './Component/get-user/get-user';
import { CreateUser } from './Component/create-user/create-user';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
@NgModule({
  declarations: [
    App,
    GetUser,
    CreateUser,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  HttpClientModule,
   FormsModule,
   RouterLink
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [App]
})
export class AppModule { }
