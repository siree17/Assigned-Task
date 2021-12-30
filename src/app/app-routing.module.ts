import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SpecificComponent } from './specific/specific.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"home/:id",component:SpecificComponent},
  {path:"app",component:AppComponent},
  {path:"",redirectTo:"/home",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
