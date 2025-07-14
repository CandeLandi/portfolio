import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturedProjectsComponent } from './pages/featured-projects/featured-projects.component';

const routes: Routes = [
  { path: 'featured-projects', component: FeaturedProjectsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
