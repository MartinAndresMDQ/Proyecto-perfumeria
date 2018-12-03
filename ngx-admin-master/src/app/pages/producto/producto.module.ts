import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { ProductoRoutingModule, routedComponents } from './producto-routing.module';

import { ProductoService } from '../../@service/producto/producto.service';
import { GridModule } from '@progress/kendo-angular-grid';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { NbWindowModule } from '@nebular/theme';
import { DropDownListModule } from '@progress/kendo-angular-dropdowns';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    ThemeModule,
    FormsModule,
    GridModule,
    DropDownListModule,
    InputsModule,
    NbWindowModule,
    ProductoRoutingModule
  ],
  declarations: [
    ...routedComponents,
  ],
  providers: [ProductoService]
})
export class ProductoModule { }
