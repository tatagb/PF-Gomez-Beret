
async function fetchRazas() {
  try {
    const response = await fetch("https://dog.ceo/api/breeds/list/all")
    const data = await response.json()
    listadoRazas(data.message)
  } catch (e) {
    alert("Surgió un problema inesperado")
  }
}

fetchRazas()

function listadoRazas(listarazas) {
  document.getElementById("raza").innerHTML = `
  <select onchange="eligeRaza(this.value)">
        <option>Elige una raza</option>
        ${Object.keys(listarazas).map(function (raza) {
          return `<option>${raza}</option>`
        }).join('')}
      </select>
  `
}

async function eligeRaza(raza) {
  if (raza != "Elige una raza") {
    const response = await fetch(`https://dog.ceo/api/breed/${raza}/images`)
    const data = await response.json()
    verImagen(data.message)
  }
}


function verImagen(imagen) {
  const aleatorio = Math.floor(Math.random()*imagen.length);
  if (imagen.length > 1) {
    document.getElementById("verImagen").innerHTML = `
    <img class="foto" src="${imagen[aleatorio]}">

  `
  }
}