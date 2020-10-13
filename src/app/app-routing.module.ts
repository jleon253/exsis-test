import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ThankyouComponent } from './pages/thankyou/thankyou.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'thankyou', component: ThankyouComponent},
  {path: '**', pathMatch: 'full', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
