import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AppComponent } from './app.component';
import { CourselComponent } from './coursel/coursel.component';

// importing angular route.
import { AppRouteConfig } from '../app/app.route.config';
import { CourselHeaderComponent } from './coursel/coursel-header/coursel-header.component';
@NgModule({
  declarations: [AppComponent, CourselComponent, CourselHeaderComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CarouselModule,
    AppRouteConfig
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
