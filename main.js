const contenedor = document.getElementById("contenedor");
const verCarrito = document.getElementById("verCarrito");
const contenedorCarrito = document.getElementById("contenedorCarrito");
const contadorCarrito = document.getElementById("contadorCarrito");
const productos = [
    {
        id: 1,
        nombre: "Alimento",
        precio: 1500,
        imagen: src = "../img/alimento.jpg",
        cantidad: 1,
    },
    {
        id: 2,
        nombre: "Abrigos",
        precio: 5000,
        imagen: src = "../img/abrigo.jpg",
        cantidad: 1,
    },
    {
        id: 3,
        nombre: "Correas",
        precio: 500,
        imagen: src = "../img/correas.jfif",
        cantidad: 1,
    },
    {
        id: 4,
        nombre: "Juguetes",
        precio: 1000,
        imagen: src = "../img/juguetes.jpg",
        cantidad: 1,
    },
    {
        id: 5,
        nombre: "Caniles",
        precio: 15000,
        imagen: src = "../img/caniles.jpg",
        cantidad: 1,
    },
    {
        id: 6,
        nombre: "Shampoo",
        precio: 800,
        imagen: src = "../img/shampoo.jpg",
        cantidad: 1,
    },
    {
        id: 7,
        nombre: "Pipetas",
        precio: 3000,
        imagen: src = "../img/pipetas.jpg",
        cantidad: 1,
    },
    {
        id: 8,
        nombre: "Piedras",
        precio: 200,
        imagen: src = "../img/piedras.jpg",
        cantidad: 1,
    },
];

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

productos.forEach((producto) => {
    let contenido = document.createElement("div");
    contenido.className = "producto";
    contenido.innerHTML = `
<img class="imgProd" src="${producto.imagen}">
<h3 class= "nombreProd">${producto.nombre}</h3>
<p class= "precioProd"> $ ${producto.precio}</p>
`

    contenedor.append(contenido);

    let botonAgregar = document.createElement("button");
    botonAgregar.innerText = "AGREGAR AL CARRITO"
    botonAgregar.className = "botonAgregar"

    contenido.append(botonAgregar);

    botonAgregar.addEventListener("click", () => {
        Swal.fire({
            title: 'Bravo!',
            text: 'Producto agregado al carrito',
            imageUrl: '../img/exitoso.png',
            imageAlt: 'Custom image',
          })
        const repetir = carrito.some ((repetirProducto) => repetirProducto.id === producto.id);
        console.log(repetir);
        if (repetir) {
            carrito.map((prod) => {
                if(prod.id === producto.id) {
                    prod.cantidad++
                }
            });
        } else {
            carrito.push({
                id: producto.id,
                imagen: producto.imagen,
                nombre: producto.nombre,
                precio: producto.precio,
                cantidad: producto.cantidad,
            });
        }
        counterCarrito ();
        guardadoLocal();
            });
    });


// ---------CARRITO-----------

const llenarCarrito = () => {
    contenedorCarrito.innerHTML = "";
    contenedorCarrito.style.display = "flex";
    const headerCarrito = document.createElement("div");
    headerCarrito.className = "headerCarrito";
    headerCarrito.innerHTML = `
        <h1 class="contenedorCarritoTitulo">Carrito de Compras</h1>
        `;
    contenedorCarrito.append(headerCarrito);

    const salirCarrito = document.createElement("h1");
    salirCarrito.innerText = "X";
    salirCarrito.className = "salirCarrito";
    headerCarrito.append(salirCarrito);

    salirCarrito.onclick = () => {
        contenedorCarrito.style.display = "none";
    }

    carrito.forEach((producto) => {
        let bodyCarrito = document.createElement("div");
        bodyCarrito.className = "bodyCarrito";
        bodyCarrito.innerHTML = `
            <img class="imgProd" src="${producto.imagen}">
            <h3 class= "nombreProd">${producto.nombre}</h3>
            <p class= "precioProd"> $ ${producto.precio}</p>
            <span class= "restar"> ➖ </span>
            <p>Cantidad: ${producto.cantidad}</p>
            <span class= "sumar"> ➕ </span>
            <p>Subtotal $: ${producto.cantidad * producto.precio}</p>
            <img id="btnEliminar" class="btnEliminar" src="../img/cesto.png">
            `;
        contenedorCarrito.append(bodyCarrito);

        let restar = bodyCarrito.querySelector(".restar");
        restar.onclick = () => {
            if (producto.cantidad !== 1) {
                producto.cantidad--;
                guardadoLocal();
                llenarCarrito();
            }
        };

        let sumar = bodyCarrito.querySelector(".sumar");
        sumar.onclick = () => {
            if (producto.cantidad !== 0) {
                producto.cantidad++;
                guardadoLocal();
                llenarCarrito();
            }
        };


        const eliminarProducto = (id) => {
            const encuentraID = carrito.find ((elemento)=> elemento.id === id);

            carrito = carrito.filter((carritoId) => {
                return carritoId !== encuentraID;
            });
        }
        let eliminar = bodyCarrito.querySelector(".btnEliminar");
        eliminar.addEventListener("click", ()=> {
            Swal.fire({
                title: 'Ups!',
                text: 'Producto eliminado',
                imageUrl: '../img/molesto.png',
                imageAlt: 'Custom image',
              })
            eliminarProducto(producto.id);
            guardadoLocal();
            llenarCarrito();
        });

    })

    const total = carrito.reduce((acumulador, elemento) => acumulador + elemento.precio * elemento.cantidad, 0);
    const compraTotal = document.createElement("div");
    compraTotal.className = "compraTotal";
    compraTotal.innerHTML = `
    Tu total a pagar es $ ${total}`
    contenedorCarrito.append(compraTotal);
};

verCarrito.onclick = (llenarCarrito);


const guardadoLocal = () => {
    (localStorage.setItem("carrito", JSON.stringify(carrito)));
};

