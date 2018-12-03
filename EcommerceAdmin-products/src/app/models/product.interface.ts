import { Image } from './image.interface';
import { Genero } from './genero.interface';
import { Tipo } from './tipo.interface';
import { Marca } from './marca.interface';

export interface Product {
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
}
