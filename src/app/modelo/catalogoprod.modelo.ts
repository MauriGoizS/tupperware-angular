

export interface clasificacion{
    nomClasificacion: string;
    Descripcion: string;
}



export interface dimensiones{

    altura: number;
    ancho: number;
    largo: number;
    capacidad: number;

}

export interface catalogo{
    _id: string;
    nombre: string;
    clasificacion: clasificacion;
    modelo: string;
    costo: number;
    precio: number;
    dimensiones: dimensiones;
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