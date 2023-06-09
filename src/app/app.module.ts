import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { IconCoreModule } from "ngx-liburg-icon";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {
  JumbotronDirective
} from "../../projects/ngx-ds/src/lib/jumbotron.directive";
import {NgxBtxDirective} from "ngx-ds";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    NgxBtxDirective,
    IconCoreModule,
    JumbotronDirective,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
