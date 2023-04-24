export class Serie {
    numero: number;
    nombre: String;
    canal: String;
    temporadas: number;
    descripcion: String;
    link: String;
    linkImagen: string;
    
    constructor(numero: number, nombre: String, canal: String, temporadas: number, descripcion: String, link: String, linkImagen: string){
        this.numero = numero;
        this.nombre = nombre;
        this.canal = canal;
        this.temporadas = temporadas;
        this.descripcion = descripcion;
        this.link = link;
        this.linkImagen = linkImagen;
    }
 }