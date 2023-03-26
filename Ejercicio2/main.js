
const Taller  = document.getElementById('Taller');
const Profesor = document.getElementById('ProfesorReserva');
const horasReserva = document.getElementById('HorasReserva');
const Listado = document.getElementById('Listado');

const anhadirTaller = async () => {
    try {
        if(Taller.value !== '' && horasReserva.value !== '' && horasReserva.value !== ''){
            await axios.post('http://localhost:3000/Reservas',
            {
                Taller: Taller.value,
                Profesor: Profesor.value,
                Horas_Reservadas: horasReserva.value
            })
        }
        else{
            alert('Error tiene que rellenar todos los campos')
        }
        
    } catch (error) {
        console.error(error)
        
    }
}

const mostrarReservas = async () => {
    try {
        const response = await axios.get('http://localhost:3000/Reservas')
        response.data.map(el =>{
            let li = document.createElement('li')
            let taller=document.createElement('p')
            let profe = document.createElement('p')
            let horas = document.createElement('p')
            let eliminar = document.createElement('button')
            let actualizar = document.createElement('button')
            li.innerHTML = `Room`
            taller.value = el.Taller
            taller.innerHTML = `Taller: ${el.Taller}`
            profe.value = el.Profesor
            profe.innerHTML = `Profesor: ${el.Profesor}`
            horas.value = el.Horas_Reservadas
            horas.innerHTML = `Horas Reservadas: ${el.Horas_Reservadas}`
            eliminar.innerHTML = `Eliminar`
            actualizar.innerHTML = "Actualizar"
            Listado.appendChild(li)
            li.appendChild(taller)
            li.appendChild(profe)
            li.appendChild(horas)
            li.appendChild(eliminar)
            li.appendChild(actualizar)
            actualizar.addEventListener('click',() =>actualizarReserva(el.id,taller,profesor,horas))
            eliminar.addEventListener('click', ()=>eliminarReserva(el.id))  
        })
    } catch (error) {
        console.log(error)
    }
}


eliminarReserva = async (id) =>{
    try {
        await axios.delete(`http://localhost:3000/Reservas/${id}`)
    } catch (error) {
        console.log(error)
    }

}
actualizarReserva = async (id,taller,profesor,horas) => {
    try {
        
    } catch (error) {
        Taller.oninput = taller
    Profesor.inputMode = profesor
    horasReserva.inputMode = horas
    await axios.patch(`http://localhost:3000/Reservas/${id}`,
            {Taller: taller.value,
            Profesor: profesor.value,
            Horas_Reservadas: horas.value,
            }
    )
    }
    
}
window.addEventListener('DOMContentLoaded',() => mostrarReservas())