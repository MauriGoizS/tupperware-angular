import { Proveedor } from './catproveedor';


export interface Clasificacion {
    nomClasificacion: string;
    Descripcion: string;
}



export interface Dimensiones {

    altura: number;
    ancho: number;
    largo: number;
    capacidad: number;

}

export interface Producto {
    _id: string;
    nombre: string;
    clasificacion: Clasificacion;
    modelo: string;
    costo: number;
    precio: number;
    dimensiones: Dimensiones;
    numeroDePiezas: number;
    color: string[];
    foto: string;
    fechaAdquisicion : string;
    cantidadExistente: number;
    status: string;
    ciudadanosRecomendados: number;
    materialFabricacion: string;
    paisOrigen:number;
    marcaId: string;
    estado: string;
    proveedor: Proveedor | null;
}
