import { Component, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UploadFile, UploadInput } from 'ngx-uploader';
import { UploadOutput } from 'ngx-uploader';
import { ProductsCategoriesService } from '../../services/products-categories/products-categories.service';
import { AuthService } from '../../services/auth/auth.service';
import { ProductsService } from '../../services/products/products.service';
import { ProductCategory } from '../../models/product-category.interface';
import { MatDialog, MatPaginator, MatSnackBar, MatTableDataSource } from '@angular/material';
import { Product } from '../../models/product.interface';
import { EditProductComponent } from './edit/edit.product.component';
import { Genero } from '../../models/genero.interface';
import { Tipo } from '../../models/tipo.interface';
import { Marca } from '../../models/marca.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productForm: FormGroup;
  productTableColumns: string[] = ['codigo', 'nombre', 'descripcion', 'precio', 'descuento'];

  categories: any[];
  files: UploadFile[];
  uploadInput: EventEmitter<UploadInput>;
  productId: number;
  progress = 0;
  showProgressBar = false;
  products: Product[]=[];
  marcas: Marca[] = [{ nombre: "Sin Especificar", descripcion: "Sin Especificar" }];
  tipos: Tipo[] = [{ descripcion: "Sin Especificar" }];
  generos: Genero[] = [{ descripcion: "Hombre" }, { descripcion: "Mujer" }, { descripcion: "Ambos" }];
  productsTable: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(private fb: FormBuilder,
    private categoryService: ProductsCategoriesService,
    private authService: AuthService,
    private productService: ProductsService,
    private addedAlert: MatSnackBar,
    private dialog: MatDialog) {
    this.files = [];
    this.uploadInput = new EventEmitter<UploadInput>();
  }


  ngOnInit() {
    this.createForm();
    this.traerProductos();
    // this.getCategories();
  }

  createForm() {
    this.productForm = this.fb.group({
      'codigo': new FormControl('', [Validators.required]),
      'nombre': new FormControl('', [Validators.required]),
      'descripcion': new FormControl(''),
      'cantidad': new FormControl(0, [Validators.required]),
      'genero': new FormControl('', Validators.required),
      'tipo': new FormControl('', Validators.required),
      'precio': new FormControl(0, [Validators.required, Validators.pattern('^\\d{0,8}(\\.\\d{1,2})?$')]),
      'descuento': new FormControl(0, [Validators.pattern('^\\d{0,8}(\\.\\d{1,2})?$')]),
      'contenido': new FormControl('', Validators.required),
      'marca': new FormControl('', Validators.required),
      'calificacion': new FormControl(10),
      'comentarios': new FormControl([]),
      'imagenes': new FormControl([])
    });
  }

  // getCategories() {
  //   this.categoryService.fetchProductCategories().subscribe(
  //     (catsSnapshot) => {console.log(catsSnapshot)
  //       this.categories = [];
  //       catsSnapshot.forEach((catData: any) => {
  //         this.categories.push( 
  //           {
  //           id: catData.payload.doc.id,
  //           name: catData.payload.doc.data().name,
  //           nameEng: catData.payload.doc.data().nameEng,
  //           productCategories: catData.payload.doc.data().productCategories
  //         }
  //         );
  //       })
  //       console.log(this.categories)
  //       // (resp) => {
  //     // console.log(resp)
  //     // this.categories = resp.reduce((a, b) => [...a, ...b.productCategories], []);
  //   }
  //   );
  // }

  addProduct() {
    console.log(this.productForm.value)
    this.productService.addProduct(this.productForm.value).then(resp => {
      console.log(resp);
      // this.productId = resp;
      // this.startUpload();
    });
  }

  onUploadOutput(output: UploadOutput): void {
    if (output.type === 'addedToQueue' && typeof output.file !== 'undefined') { // add file to array when added
      this.files.push(output.file);
    } else if (output.type === 'uploading' && typeof output.file !== 'undefined') {
      const index = this.files.findIndex(file => typeof output.file !== 'undefined' && file.id === output.file.id);
      this.files[index] = output.file;
      this.countProgress();
    } else if (output.type === 'allAddedToQueue') {
      this.showProgressBar = true;
    }
    if (output.type === 'done') {
      this.countProgress();
      if (this.progress === 100) {
        this.productForm.reset();
        this.showProgressBar = false;
        this.addedAlert.open('Added successfully !', 'Close', {
          duration: 2000
        });
      }
    }
  }

  // startUpload(): void {
  //   const token = this.authService.getToken();
  //   const event: UploadInput = {
  //     type: 'uploadAll',
  //     url: '/api/images/' + this.productId + '/false',
  //     method: 'POST',
  //     headers: {'Authorization': 'Bearer ' + token},
  //     data: {}
  //   };

  //   this.uploadInput.emit(event);
  // }

  countProgress(): void {
    const max = this.files.length * 100;
    let current = 0;
    for (const file of this.files) {
      current += file.progress.data.percentage;
    }
    this.progress = ((current * 100) / max);
  }

  buildTable(data: Product[]) {
    this.productsTable = new MatTableDataSource<Product>(data);
    this.productsTable.paginator = this.paginator;
  }

  traerProductos() {
    this.productService.getProducts().subscribe(
      (data) => {
        console.log(data);
        // this.products = data;
        data.forEach((catData: any) => {
          this.products.push(catData.payload.doc.data());
          this.productsTable = new MatTableDataSource<Product>(this.products);
          this.productsTable.paginator = this.paginator;
        })

        //   (data => {
        //   console.log(data);
        //   this.products = data;
        //   this.productsTable = new MatTableDataSource<Product>(data);
        //   this.productsTable.paginator = this.paginator;
        //   // for (let product of  this.products) {
        //   //   // product.productCategoryId = id;
        //   // }
        //   this.buildTable(data);
        // });
      })
  }

  openEditModal(product: Product) {
    this.dialog.open(EditProductComponent, {
      minWidth: '60%',
      maxHeight: '80%',
      position: { right: '10px' },
      data: product
    });
  }
}
