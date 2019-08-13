import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Products } from '../models/products';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CourselService {
  private currentData$ = new Subject<Products[]>();
  readonly products$: Observable<
    Array<Products>
  > = this.currentData$.asObservable();
  constructor(private http: HttpClient) {}
  getProducts$(): Observable<Array<Products>> {
    const url = 'assets/json/product.json';
    return this.http.get<Products[]>(url).pipe(
      map((response: Products[]) => {
        this.currentData$.next(response);
        return response;
      })
    );
  }

  init(): Observable<Array<Products>> {
    return this.getProducts$();
  }
  updateProducts(products: Array<Products>): Observable<Array<Products>> {
    const url = 'assets/json/product.json';
    return this.http.get<Products[]>(url).pipe(
      map((response: Products[]) => {
        const res = [...products, ...response];
        this.currentData$.next(res);
        return res;
      })
    );
  }
}
