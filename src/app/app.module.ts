import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { DemoTypeaheadFormsComponent } from './demo-typeahead-static-component/demo-typeahead-static-component.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoTypeaheadFormsComponent
  ],
  imports: [
    TypeaheadModule.forRoot(),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
