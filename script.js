
let urlBase ='https://api.openweathermap.org/data/2.5/weather'
let api_key = '992251154fcbeb3e46859b7c0aac61a3'

let diffKelvin = 273.15
let contenedor = document.getElementById("contenedor")
    

document.getElementById("modo").addEventListener('click', () => {
    let titulo = document.getElementById("titulo")
    let contenedorResultados = document.getElementById("results")
    let modo = document.getElementById("modo")
    let fondo = document.getElementById('fondo')
    contenedor.classList.toggle("container")
    contenedor.classList.toggle("activeContainer")
    titulo.classList.toggle("title")
    titulo.classList.toggle("activeTitle")
    contenedorResultados.classList.toggle("respuestas")
    contenedorResultados.classList.toggle("activeRespuestas")
    modo.classList.toggle("modoBotonActivado")
    modo.classList.toggle("modoBoton")
    fondo.classList.toggle("colorFondo")
    fondo.classList.toggle("activeColorFondo")
})
document.getElementById("Consultar").addEventListener('click', () => {
    

    let ciudad = document.getElementById("Lugar").value
    busqueda(ciudad)
})

function busqueda(ciudad) {
    fetch(`${urlBase}?q=${ciudad}&appid=${api_key}`)
        .then(resp => resp.json())
        .then(data => mostrarDatos(data))
}

function mostrarDatos(data){
    console.log(data)
    const div=document.getElementById("results")
    div.innerHTML=""
    let paisNombre = data.sys.country
    let nombre = data.name
    let descripcion = data.weather[0].description
    let temperatura = data.main.temp
    let icono = data.weather[0].icon

    let name = document.createElement('h2')
    name.textContent=`${nombre}, ${paisNombre}`
    name.style.textTransform="uppercase"
    let grados = document.createElement('p')
    grados.textContent=`La temperatura es ${Math.floor(temperatura-diffKelvin)} °C`
    let argumento = document.createElement('p')
    argumento.textContent= descripcion
    let imagen = document.createElement('img')
    imagen.src = `https://openweathermap.org/img/wn/${icono}@2x.png`
    div.appendChild(name)
    div.appendChild(grados)
    div.appendChild(imagen)
    div.appendChild(argumento)

}