export class experiencia{
    id?:number;
    empresa: String;
    puesto: String;
    img: String;
    start: String;
    end: String; 

    constructor(empresa:String, puesto:String,img:String,start:String,end:String){
        this.empresa = empresa;
        this.puesto = puesto;
        this.img = img;
        this.start = start;
        this.end = end;  
    }
}