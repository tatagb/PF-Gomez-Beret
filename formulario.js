const formulario = document.getElementById("formulario");

formulario.onsubmit = (administarSubmit);

async function administrarSubmit (evento) {
evento.preventDefault()
const form = new FormInfo (this)
const response = await fetch (this.action, {
    method: this.method,
    body: form,
    header: {
        'Accept': 'application/json'
    }
})
if (response.ok) {
    this.reset ()
    alert ("PIOLA")
}
};