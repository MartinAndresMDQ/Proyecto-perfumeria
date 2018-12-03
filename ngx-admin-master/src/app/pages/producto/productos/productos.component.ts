// import { NbMenuService } from '@nebular/theme';
import { Component, ViewChild, TemplateRef, Inject } from '@angular/core';

// import { LocalDataSource } from 'ng2-smart-table';
import { ProductoService } from '../../../@service/producto/producto.service';
import { Producto } from '../../../@model/producto';
import { TableGeneric } from '../../../@theme/components';
// import { NbDialogService } from '@nebular/theme';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Genero } from '../../../@model/genero';
import { Marca } from '../../../@model/marca';
import { Tipo } from '../../../@model/tipo';

@Component({
  selector: 'ngx-productos',
  styleUrls: ['./productos.component.scss'],
  templateUrl: './productos.component.html',
})
export class ProductosComponent extends TableGeneric {
  @ViewChild('contentTemplate') contentTemplate: TemplateRef<any>;

  // public gridData: any[] = [];
  public listGenero: Array<Genero> = [{ descripcion: "Hombre" }, { descripcion: "Mujer" }, { descripcion: "Ambos" }];
  public listTipo: Array<Tipo> = [{ descripcion: "Sin Especificar" }, { descripcion: "NUEVO" }, { descripcion: "VIEJO" }];
  public listMarca: Array<Marca> = [{ nombre: "Sin Especificar", descripcion: "Sin Especificar" }, { nombre: "TEST", descripcion: "TEST" }];

  constructor(@Inject(ProductoService) private productService: ProductoService,
    private modalService: NgbModal) {
    super();
  }

  ngOnInit() {
    this.columns = [
      { name: 'Codigo', prop: 'codigo' },
      { name: 'Nombre', prop: 'nombre' },
      { name: 'Descripcion', prop: 'descripcion' },
      { name: 'Precio', prop: 'precio' },
      { name: 'Descuento', prop: 'descuento' },
    ];
    this.traerProductos();
  }

  traerProductos() {
    this.productService.items.subscribe(
      (datas) => {
        console.log(datas);
        // for (let dat of datas) {
        //   let product = dat.payload.doc.data()
        //   product.id = dat.payload.doc.id
        //   this.datos.push(product);
        // }
        this.datos = datas;
        this.loadDatos();

      })
  }

  edit: Producto;
  idEdit: string;
  onEdit(content, event) {
    console.log(event)
    this.edit = Object.assign({}, event.dataItem);
    this.idEdit = (<any>this.edit).id
    // delete (<any>this.edit).id;
    this.modalService.open(content)
  }
  addHandler(content, event) {

    console.log(event)
    // this.edit = Object.assign({}, event.dataItem);
    // this.idEdit = (<any>this.edit).id
    this.edit = new Producto();
    this.edit.marca = this.listMarca[0];
    this.edit.tipo = this.listTipo[0];
    this.edit.genero = this.listGenero[3];
    // delete (<any>this.edit).id;
    this.modalService.open(content)
  }
  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  Guardar() {
    if (this.idEdit == null) {
      this.productService.addProduct(this.edit).then(data => { console.log(data) })
    }
    else {
      this.productService.updateProduct(this.idEdit, this.edit).then(data => console.log(data))
    }
  }
}
