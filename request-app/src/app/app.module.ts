import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RequestComponent } from './request/request.component';

import { MovieService } from './services/movie.service';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    RequestComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
