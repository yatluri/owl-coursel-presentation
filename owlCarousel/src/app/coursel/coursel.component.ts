import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ResponsiveSettings } from 'ngx-owl-carousel-o';
import { InfiniteScrollDirective } from 'ngx-infinite-scroll';
import { CourselViewModel } from './models/coursel-view.model';
import { CourselService } from './services/coursel.service';
import { Observable } from 'rxjs';
import { Products } from './models/products';

@Component({
  selector: 'app-coursel',
  templateUrl: './coursel.component.html',
  styleUrls: ['./coursel.component.scss']
})
export class CourselComponent implements OnInit {
  @ViewChild('owlContainer', { static: false }) owlContainer: ElementRef;
  @ViewChild(InfiniteScrollDirective, { static: false }) set appScroll(
    directive: InfiniteScrollDirective
  ) {
    this.vm.infiniteScroll = directive;
  }
  vm = new CourselViewModel();
  products$: Observable<Array<Products>> = this.courselService.products$;
  constructor(private courselService: CourselService) {}

  ngOnInit() {
    // this.vm.isAnimated = true;
    this.courselService.init().subscribe(response => {
      if (response) {
        this.setOwlItems();
      }
    });
  }

  setOwlItems() {
    setTimeout(() => {
      const owlContainer = this.owlContainer.nativeElement as HTMLElement;
      this.vm.owlStageOuter = owlContainer.querySelector(
        '.owl-stage-outer'
      ) as HTMLElement;
      this.vm.owlItems = owlContainer
        .querySelector('.owl-stage')
        .querySelectorAll('.owl-item') as NodeList;
      this.assignOwlClass();
    }, 100);
  }
  assignOwlClass() {
    if (this.vm.owlItems.length > 0) {
      !this.vm.isAnimated
        ? (this.vm.owlStageOuter.style.boxShadow = '0 2px 6px 1px darkgrey')
        : // tslint:disable-next-line: no-unused-expression
          null;
      this.vm.owlItems.forEach((v, k) => {
        const owlItem = v as HTMLElement;
        owlItem.style.backgroundColor = '#fff';
        // owlItem.style.boxShadow = '0 8px 6px -6px black';
      });
    }
  }
  addToChart(p: Products) {}
  onUpdateView($event: string) {
    if ($event) {
      this.vm.viewSelected = $event;
      // tslint:disable-next-line: no-unused-expression
      this.vm.viewSelected === 'presentation' ? this.setOwlItems() : null;
    }
  }
  onScrollDown(products: Array<Products>) {
    // const tempArray: Products[] = [...products, ...products];
    // this.courselService.updateProducts(tempArray).subscribe(res => {
    //   this.vm.infiniteScroll.ngOnDestroy();
    //   this.vm.infiniteScroll.setup();
    // });
    console.log('scrolled-down');
  }
  onUp() {}
  onAnimationType($event: string) {
    if ($event) {
      this.vm.isAnimated = $event === 'flip';
    }
  }
}
