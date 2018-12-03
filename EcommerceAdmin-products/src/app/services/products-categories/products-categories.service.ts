import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {API_PRODUCTS_CATEGORIES_URL} from '../../constants/enpoints';
import {ProductCategory} from '../../models/product-category.interface';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore } from '@angular/fire/firestore';

// import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';

@Injectable()
export class ProductsCategoriesService {

  constructor(private http: HttpClient,
    private db: AngularFirestore) {
  }
  
  memory: any = {};

  fetchProductCategories() : Observable<any> {
    return this.db.collection("ProductCategory").snapshotChanges();
    // .subscribe(d=>{
    //   console.log('data streaming');
    //   this.dataSource = new ViewMemoriesDataSource(this.paginator, this.sort);   
    //   this.dataSource.data = d;
    // });
  }

  
  addProductCategory2(){
    let data = {
      // id: 0,
      name: "NUEVO",
      nameEng: "NUEVO2",
      productCategories: []
    }

    return this.db.collection('ProductCategory').add(data);
    //  .then(_ => {
    //    this.memory = {}
    //    console.log('success')
    //  })    

    // return this.db.list<ProductCategory>("ProductCategory").valueChanges();
    // .subscribe(d=>{
    //   console.log('data streaming');
    //   this.dataSource = new ViewMemoriesDataSource(this.paginator, this.sort);   
    //   this.dataSource.data = d;
    // });
  }

  // public fetchProductCategories(): Observable<any> {
  //   return this.http.get(API_PRODUCTS_CATEGORIES_URL);
  // }

  public fetchProductCategoryById(id: string): Observable<any> {
    return this.http.get(API_PRODUCTS_CATEGORIES_URL + '/' + id);
  }

  public addProductCategory(data: ProductCategory): Observable<any> {
    return this.http.post(API_PRODUCTS_CATEGORIES_URL, data);
  }

  public deleteProductCategory(id: string): Observable<any> {
    return this.http.delete(API_PRODUCTS_CATEGORIES_URL + id);
  }

  public updateCategory(id: string, data: any): Observable<any> {
    return this.http.put(`${API_PRODUCTS_CATEGORIES_URL}/${id}`, data);
  }
}
