import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";

import { InMemoryWebApiModule } from "angular-in-memory-web-api";

import { InMemoryDataClass } from "./in-memory-data.service";

import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing.module";
import { ContatosModule } from './contatos/contatos.module'


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ContatosModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataClass)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
