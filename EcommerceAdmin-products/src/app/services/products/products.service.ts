import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {API_PRODUCTS_URL} from '../../constants/enpoints';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable()
export class ProductsService {

  constructor(private http: HttpClient,
    private db: AngularFirestore) {
  }

  public fetchProducts(): Observable<any> {
    return this.http.get(API_PRODUCTS_URL);
  }

  public getProducts(): Observable<any> {
    return this.db.collection("Product").snapshotChanges();
  }

  public addProduct(product: any): Promise<firebase.firestore.DocumentReference> {
    return this.db.collection("Product").add(product);
  }

  public getProductById(id: number): Observable<any> {
    return this.http.get(API_PRODUCTS_URL + '/' + id);
  }

  public getPropductsByCategoryId(categoryId: string): Observable<any> {
    return this.http.get(API_PRODUCTS_URL + '/category/' + categoryId);
  }

  public updateProduct(id: number, data: any): Observable<any> {
    return this.http.put(API_PRODUCTS_URL + '/' + id, data);
  }

  public deleteProduct(productId: number, categoryId: string): Observable<any> {
    return this.http.delete(API_PRODUCTS_URL + '/' + productId + '/' + categoryId);
  }
}
