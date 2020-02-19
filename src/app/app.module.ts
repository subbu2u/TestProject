import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClient } from '@angular/common/http';
import { ForcastDetailComponent } from './forcast-detail/forcast-detail.component';
import { MetroListComponent } from './metro-list/metro-list.component';


@NgModule({
  declarations: [
    AppComponent,
    MetroListComponent,
    ForcastDetailComponent   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule 
  ],
  providers: [HttpClient],
  bootstrap: [MetroListComponent]
})
export class AppModule { }
