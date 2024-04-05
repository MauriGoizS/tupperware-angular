export interface clasificacion{
    nomClasificacion: string;
    Descripcion: string;
}

export interface catalogob{
    _id: string;
    nombre: string;
    clasificacion: clasificacion;
    foto: string;
    precio: number;
}