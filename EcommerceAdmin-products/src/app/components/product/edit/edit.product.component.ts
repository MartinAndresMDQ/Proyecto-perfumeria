import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material';
import {Product} from '../../../models/product.interface';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {environment} from '../../../../environments/environment';
import {DeleteAlertComponent} from '../../shared/delete-alert/delete-alert.component';
import {ProductsService} from '../../../services/products/products.service';
import { Genero } from '../../../models/genero.interface';
import { Tipo } from '../../../models/tipo.interface';
import { Marca } from '../../../models/marca.interface';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.product.component.html',
  styleUrls: ['./edit.product.component.css']
})
export class EditProductComponent implements OnInit {
  productEditForm: FormGroup;
  categoryName = '';
  contentHost = environment.backendPath;
  marcas: Marca[] = [{ nombre: "Sin Especificar", descripcion: "Sin Especificar" }];
  tipos: Tipo[] = [{ descripcion: "Sin Especificar" }];
  generos: Genero[] = [{ descripcion: "Hombre" }, { descripcion: "Mujer" }, { descripcion: "Ambos" }];

  constructor(@Inject(MAT_DIALOG_DATA) public product: Product,
              private fb: FormBuilder,
              private dialog: MatDialog,
              private productService: ProductsService) {
  }

  ngOnInit() {
    this.createForm();
  }

  editProduct() {
    const data = this.productEditForm.value;
    // this.productService.updateProduct(this.product.id, data).subscribe(data => {
    //   window.location.reload();
    // });
  }

  createForm() {
    console.log(this.product)
    this.productEditForm = this.fb.group({
      'codigo': new FormControl(this.product.codigo, [Validators.required]),
      'nombre': new FormControl(this.product.nombre, [Validators.required]),
      'descripcion': new FormControl(this.product.descripcion),
      'cantidad': new FormControl(this.product.cantidad, [Validators.required]),
      'genero': new FormControl(this.product.genero, Validators.required),
      'tipo': new FormControl(this.product.tipo, Validators.required),
      'precio': new FormControl(this.product.precio, [Validators.required, Validators.pattern('^\\d{0,8}(\\.\\d{1,2})?$')]),
      'descuento': new FormControl(this.product.descuento, [Validators.pattern('^\\d{0,8}(\\.\\d{1,2})?$')]),
      'contenido': new FormControl(this.product.contenido, Validators.required),
      'marca': new FormControl(this.product.marca, Validators.required),
      'calificacion': new FormControl(this.product.calificacion),
      'comentarios': new FormControl(this.product.comentarios),
      'imagenes': new FormControl(this.product.imagenes)
    });

    // this.productEditForm = this.fb.group({
    //   // 'name': new FormControl(this.product.name, [Validators.required]),
    //   // 'nameEng': new FormControl(this.product.nameEng, [Validators.required]),
    //   // 'description': new FormControl(this.product.description, Validators.required),
    //   // 'descriptionEng': new FormControl(this.product.descriptionEng, Validators.required),
    //   // 'price': new FormControl(this.product.price, [Validators.required, Validators.pattern('^\\d{0,8}(\\.\\d{1,2})?$')]),
    //   // 'sizes': new FormControl(this.product.sizes),
    //   'productCategory': new FormControl({value: this.categoryName, disabled: true}, Validators.required)
    // });
  }

  openRemoveModal() {
    this.dialog.open(DeleteAlertComponent, {
      data: {title: 'Seguro que desea borrar este producto?'}
    }).afterClosed().subscribe(result => {
      if (result) {
        // this.productService.deleteProduct(this.product.id, this.product.productCategoryId).subscribe(data => {
        //   window.location.reload();
        // });
      }
    });
  }
}
