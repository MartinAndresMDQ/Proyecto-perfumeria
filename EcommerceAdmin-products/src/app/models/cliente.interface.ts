import { Direccion } from "./pedido.interface";

export interface Cliente {
  nombre: string;
  email: string;
  contraseña: string;
  direccion: Direccion;
  telefono: string;
  celular: string;
}