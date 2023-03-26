const superHeroes = [
    {nombre: 'Linterna Verde', tipo:'DC'},
    {nombre: 'Batman', tipo:'DC'},
    {nombre: 'Spiderman', tipo:'Marvel'},
    {nombre: 'Lobezno', tipo:'Marvel'},
]


//Filtrado y ordenado de un array de objetos por campo
const filtraHeroes = (tipo) =>{
return superHeroes
 .filter(el => el.tipo === tipo)
 .sort((el,el2)=>el.nombre.localeCompare(el2.nombre))
}

console.log(filtraHeroes('DC'))