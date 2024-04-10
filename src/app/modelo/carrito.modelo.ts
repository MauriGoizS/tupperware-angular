export interface CarritoModelo {
  _id?: string;
  fecha_carrito: Date;
  productos: Producto[];
}

export interface Producto {
  _id: string;
  cantidad: number;
  color: string;
  fechaAdquisicion: string;
  foto: string;
  nombre: string;
  precio: number;
}
