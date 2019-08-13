import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'owlCarousel';
  ngOnInit() {}
  ngAfterViewInit() {
    // setTimeout(() => {
    //   const googleWrapper = document.querySelector(
    //     '.goog-te-gadget-simple'
    //   ) as HTMLElement;
    //   googleWrapper.classList.add('form-control');
    // }, 900);
  }
}
