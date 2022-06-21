export class proyecto{
    id?:number;
    titulo: String;
    link: String;
    img: String;
    descripcion: String;
    fecha: String; 

    constructor(titulo:String, link:String,img:String,descripcion:String,fecha:String){
        this.titulo = titulo;
        this.link = link;
        this.img = img;
        this.descripcion = descripcion;
        this.fecha = fecha;  
    }
}