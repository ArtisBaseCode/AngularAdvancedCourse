import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PromiseComponent } from './components/promise/promise.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'promise', component: PromiseComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
