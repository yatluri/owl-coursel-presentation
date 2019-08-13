import { OwlOptions } from 'ngx-owl-carousel-o';
import { InfiniteScrollDirective } from 'ngx-infinite-scroll';
export class CourselViewModel {
  isAnimated = false;
  viewSelected = 'presentation';
  owlItems: NodeList;
  owlStageOuter: HTMLElement;
  scrollDistance = 1;
  scrollUpDistance = 1;
  throttle = 150;
  infiniteScroll: InfiniteScrollDirective;
  courselOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    autoWidth: true,
    smartSpeed: 450,
    margin: 15,
    stagePadding: 10,
    items: 1,
    responsiveRefreshRate: 200,
    nav: false
  };
  courselAnimationOptions: OwlOptions = {
    responsiveRefreshRate: 200,
    animateIn: 'flipInX',
    items: 1,
    margin: 20,
    stagePadding: 10,
    smartSpeed: 450
  };
}
