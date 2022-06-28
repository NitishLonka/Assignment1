import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentcomponentComponent } from './components/parentcomponent/parentcomponent.component';
import { FormsModule } from '@angular/forms';
import { Abc } from './directives/color.directive';
@NgModule({
  declarations: [
    AppComponent,
    ParentcomponentComponent,
    Abc,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
