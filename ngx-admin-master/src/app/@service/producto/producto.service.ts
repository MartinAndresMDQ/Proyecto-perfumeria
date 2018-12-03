import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Producto } from '../../@model/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private itemsCollection: AngularFirestoreCollection<Producto>;
  items: Observable<Producto[]>;
  constructor(private db: AngularFirestore) {
    this.itemsCollection = db.collection<Producto>('Product');
    this.items = this.itemsCollection.valueChanges();
  }

  public getProducts(): Observable<any> {
    return this.itemsCollection.snapshotChanges();
  }

  public addProduct(product: any): Promise<firebase.firestore.DocumentReference> {
    return this.itemsCollection.add(product);
  }

  public updateProduct(id:string,product: any): Promise<void> {
    return this.itemsCollection.doc(id).set(product);
  }

}
