import { Producto } from "./producto";
import { Cliente } from "./cliente";

export class Estado {
  descripcion: string;
}

export class Pago {
  descripcion: string;
}

export class Provincia {
	nombre: string;
}

export class Localidad {
	id: number;
	nombre: string;
	codigopostal: string;
	provincia: Provincia;
}

export class Direccion {
	localidad: Localidad;
	zona: string;
	calle:string;
	numero:string;
	piso:string;
	departamento:string;
	lat:string;
	lng:string;
}

export class Articulo {
  producto: Producto;
  cantidad: number;
  precio: number;
  descuento: number;
}

export class Pedido {
  codigo: string;
  cliente: Cliente;
  articulos: Articulo[];
  total: number;
  descuento: number;
  fecha: Date;
  estado: Estado;
  direccion: Direccion;
  pago: Pago;
  comentario: string;
}
