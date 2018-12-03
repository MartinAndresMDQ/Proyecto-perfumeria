import { Product } from "./product.interface";
import { Cliente } from "./cliente.interface";

export interface Estado {
  descripcion: string;
}

export interface Pago {
  descripcion: string;
}

export interface Provincia {
	nombre: string;
}

export interface Localidad {
	id: number;
	nombre: string;
	codigopostal: string;
	provincia: Provincia;
}

export interface Direccion {
	localidad: Localidad;
	zona: string;
	calle:string;
	numero:string;
	piso:string;
	departamento:string;
	lat:string;
	lng:string;
}

export interface Articulo {
  producto: Product;
  cantidad: number;
  precio: number;
  descuento: number;
}

export interface Pedido {
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
