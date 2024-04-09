

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

export interface Catalogo {
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
    proveedorId:number;
    marcaId: string;
    estado: string;
}
