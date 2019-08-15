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
    center: true,
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    autoWidth: true,
    smartSpeed: 450,
    margin: 15,
    mergeFit: true,
    stagePadding: 10,
    items: 1,
    responsiveRefreshRate: 20,
    responsive: {
      0: {
        responsiveRefreshRate: 20,
        mergeFit: true
      },
      300: {
        responsiveRefreshRate: 20,
        mergeFit: true
      },
      700: {
        responsiveRefreshRate: 20,
        mergeFit: true
      },
      940: {
        responsiveRefreshRate: 20,
        mergeFit: true
      }
    },
    nav: false,
    autoHeight: true
  };
  courselAnimationOptions: OwlOptions = {
    autoWidth: true,
    animateIn: 'flipInX',
    items: 1,
    margin: 20,
    stagePadding: 10,
    smartSpeed: 450,
    responsiveRefreshRate: 20,
    responsive: {
      0: {
        responsiveRefreshRate: 20,
        mergeFit: true
      },
      300: {
        responsiveRefreshRate: 20,
        mergeFit: true
      },
      700: {
        responsiveRefreshRate: 20,
        mergeFit: true
      },
      940: {
        responsiveRefreshRate: 20,
        mergeFit: true
      }
    }
  };
}
