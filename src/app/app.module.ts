import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomdirectiveDirective } from './directives/customdirective.directive';
import { HomeComponent } from './components/home/home.component';
import { PromiseComponent } from './components/promise/promise.component';
import { ObservableComponent } from './components/observable/observable.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomdirectiveDirective,
    HomeComponent,
    PromiseComponent,
    ObservableComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
