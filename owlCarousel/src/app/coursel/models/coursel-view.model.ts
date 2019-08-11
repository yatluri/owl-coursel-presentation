import { OwlOptions } from 'ngx-owl-carousel-o';
export class CourselViewModel {
  isAnimated = false;
  owlItems: NodeList;
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
    margin: 15,
    stagePadding: 10,
    smartSpeed: 450
  };
}
