const form = document.getElementById("my-form");
const mail = document.getElementById("mail");
form.onsubmit = (handleSubmit);

async function handleSubmit(event) {
event.preventDefault()
const data = new FormData(this);
const response = await fetch(this.action, {
  method: this.method,
  body: data,
  headers: {
    'Accept': 'application/json'
}
})
  if (response.ok) {
    Swal.fire({
        title: 'Formulario Enviado!',
        text: 'Muchas gracias por contactarte con Huellitas®',
        imageUrl: '../img/feliz.png',
        imageAlt: 'Custom image',
      })
    form.reset()
  } 
 else {
    Swal.fire({
        title: 'Error!',
        text: 'Existieron problemas al enviar el formulario',
        imageUrl: '../img/nervioso.png',
        imageAlt: 'Custom image',
      })
  }
}
