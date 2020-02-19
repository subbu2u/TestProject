import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { MetroListComponent } from './metro-list/metro-list.component'
import { ForcastDetailComponent } from './forcast-detail/forcast-detail.component'

const routes: Routes = [
  { path:"MyNotes", component: MetroListComponent },
  // { path:"Forcast16", component: ForcastDetailComponent },
  { path:"Forcast30/:id", component: ForcastDetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
