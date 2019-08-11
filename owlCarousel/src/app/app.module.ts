import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// third-party components
import { CarouselModule } from 'ngx-owl-carousel-o';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

// local components
import { AppComponent } from './app.component';
import { CourselComponent } from './coursel/coursel.component';
import { CourselHeaderComponent } from './coursel/coursel-header/coursel-header.component';
// importing angular route.
import { AppRouteConfig } from '../app/app.route.config';

@NgModule({
  declarations: [AppComponent, CourselComponent, CourselHeaderComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CarouselModule,
    InfiniteScrollModule,
    AppRouteConfig
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
