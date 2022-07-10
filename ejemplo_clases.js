class Persona
{
    //Constructor con parametros
    constructor(nombre, apellido, edad)
    {
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
    }
        //metodos
    mostrar_informacion(){
        console.log("Nombre es: "+this.nombre)
        console.log("El apellido es: "+this.apellido)
        console.log("La edad es: "+this.edad)

    }
}

//instanciar
objeto= new Persona("Cristian", "Fernandez", 40)
objeto1= new Persona("Laura", "Quiroz", 49)



// arreglos con clases 
const lista=[objeto, objeto1]

for (i=0;i<2;i++)
{
    lista[i].mostrar_informacion()
}

//objeto.mostrar_informacion()