import { Image } from './image';
import { Genero } from './genero';
import { Tipo } from './tipo';
import { Marca } from './marca';

export class Producto {
  codigo: string;
  nombre: string;
  descripcion: string;
  cantidad: number;
  genero: Genero;
  tipo: Tipo;
  precio: number;
  descuento: number;
  contenido: number;
  marca: Marca;
  calificacion: number;
  comentarios: string[];
  imagenes: Image[];

  constructor(
    codigo?: string,
    nombre?: string,
    descripcion?: string,
    cantidad?: number,
    genero?: Genero,
    tipo?: Tipo,
    precio?: number,
    descuento?: number,
    contenido?: number,
    marca?: Marca,
    calificacion?: number,
    comentarios?: string[],
    imagenes?: Image[]) {
    this.codigo = codigo || "";
    this.nombre = nombre || "";
    this.descripcion = descripcion || "";
    this.cantidad = cantidad || 0;
    this.genero = genero || new Genero();
    this.tipo = tipo || new Tipo();
    this.precio = precio || 0;
    this.descuento = descuento || 0;
    this.marca = marca || new Marca();
    this.calificacion = calificacion || 0;
    this.comentarios = comentarios || [];
    this.imagenes = imagenes || [];
  }
}
