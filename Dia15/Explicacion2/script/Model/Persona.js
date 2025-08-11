// #############################################
// P.O.O (Programación Orientada a Objetossssss)
// #############################################

// ¿Qué es la P.O.O?
/*
Es un paradigma de programación que se basa en el 
uso de "objetos" para representar entidades del mundo real dentro del software.
Cada objeto es una instancia de una clase, donde una clase es una plantilla
que define las propiedades (atributos) y comportamientos (métodos) que los objetos de este
tipo tendrán.


En términos generales, los pilares de la P.O.O son:

Abstracción : Representar entidades del mundo real con sus características esenciales.

Encapsulamiento : Ocultar los detalles internos y exponer solo lo necesario.

Herencia: Reutilizar código mediante una relación de tipo "es-un".

Polimorfismo: Permite que un mismo método se comporte de diferentes formas según el
contexto.

*/

export default class Persona{
    //Atributos en JS se integran en
    //el constructor.
    constructor(nombre,edad){
        this.nombre=nombre;
        this.edad=edad;
    }

    saludar(){
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`)
    }
}

/*
Aqui podemos evidenciar el uso de la abstracción, por el simple hecho que la 
clase Persona representa una entidad del mundo real, donde cada instancia puede
tener sus propios valores.
 */