import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'
import { SearchPageComponent } from '../search-page/search-page.component';
import { ProfilePageComponent } from '../profile-page/profile-page.component';


const routes: Routes = [
  {path:'', component: SearchPageComponent},
  {path:'search', component: SearchPageComponent},
  {path:'profile-page/:id', component: ProfilePageComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
