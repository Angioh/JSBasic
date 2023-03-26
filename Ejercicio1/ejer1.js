const profesores = [
    {nombre: 'Pedro', curso: 'DAW2', modulo:'Desarrollo Cliente Web'},
    {nombre: 'César', curso: '1SMRA', modulo:'Desarrollo Cliente Web'},
    {nombre: 'Pablo', curso: '1SMRA', modulo:'Desarrollo Cliente Web'},
    {nombre: 'Ricardo', curso: '2SMRA', modulo:'Bases de Datos'},
]

const filtraProfe = (lista,curso,tiempo) => {
    return new Promise ((resolve,reject) =>{
        setTimeout(()=>{
            if(lista != undefined){
                lista.filter(el=>{
                    if(el.curso === curso){
                        resolve(el)
                    }
                    else{
                        reject('Este curso no existe')
                    }
                })
            }
        },tiempo)
    })
    
}


console.log(promesa(profesores,'DAW2',2))