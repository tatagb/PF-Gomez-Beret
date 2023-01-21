
class Mascota {
    constructor(duenio, nombre, tipo, edad, peso) {
        this.duenio = duenio;
        this.nombre = nombre;
        this.tipo = tipo;
        this.edad = edad;
        this.peso = peso;
    }
}

const boton = document.getElementById("boton");
let listaMascotas = [];
boton.onclick = () => {
    let nombreDuenio = prompt("Ingresá tu nombre completo")
    let nombreMascota = prompt("Ingresá el nombre de tu mascota");
    let tipoMascota = prompt("¿Qué tipo de mascota es?");
    let edadMascota = parseInt(prompt("Ingresá la edad"));
    let pesoMascota = parseFloat(prompt("Ingresá el peso - en kilogramos"))
    alert("¡Su mascota se ha registrado con éxito!");

    let mascotaNueva = new Mascota(nombreDuenio, nombreMascota, tipoMascota, edadMascota, pesoMascota);
    listaMascotas.push(mascotaNueva);

    for (const mascota of listaMascotas) {
        console.log(`La nueva mascota agregada se llama ${mascota.nombre} y su dueño es ${mascota.duenio}`)
        };

    console.log(mascotaNueva);
    console.log(listaMascotas);
};


