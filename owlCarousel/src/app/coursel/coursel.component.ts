import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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
      this.vm.owlItems = owlContainer
        .querySelector('.owl-stage')
        .querySelectorAll('.owl-item') as NodeList;
      this.assignOwlClass();
    }, 100);
  }
  assignOwlClass() {
    if (this.vm.owlItems.length > 0) {
      this.vm.owlItems.forEach((v, k) => {
        const owlItem = v as HTMLElement;
        owlItem.style.backgroundColor = 'beige';
        owlItem.style.boxShadow = '0 8px 6px -6px black';
      });
    }
  }
  addToChart(p: Products) {}
}
