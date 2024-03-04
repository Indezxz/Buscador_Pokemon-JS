let urlBase = 'https://pokeapi.co/api/v2/pokemon';

document.getElementById('botonBusqueda').addEventListener('click',() => {

    const pokemon = document.getElementById("pokemonEntrada").value;
   
    if(pokemon) {
    fetchDatosPokemon(pokemon);
    }else{
        alert("Ingrese un Pokemon!!")
    }
})

function fetchDatosPokemon(pokemon) {
    fetch(`${urlBase}/${pokemon}`)
    .then(data => data.json())
    .then(data => mostrarDatos(data))
    .catch(e => alert("Pokemon no existe o esta mal escrito."))
    
}

function mostrarDatos(data) {
    console.log(data);
    // Seleccionar DIV y limpiarlo
    const divDatosPokemon = document.getElementById("datosPokemon");
    divDatosPokemon.innerHTML="";

    // Constantes traidas del fetch
    const pokemonNombre = data.forms[0].name;
    const pokemonImagen = data.sprites.front_default;
    const pokemonHabilidades = data.abilities;
    const pokemonTipos = data.types;
    

    // Craer etiquetas y agregarlos al div = 'datosClima'
    const pokemonTitulo = document.createElement('h2');
    pokemonTitulo.textContent = `${pokemonNombre}`

    const imagenInfo = document.createElement('img');
    imagenInfo.src = pokemonImagen;

    const habilidadesInfo = document.createElement('p');
    habilidadesInfo.textContent = "Sus Habilidades son: "+habilidades(pokemonHabilidades);

    function habilidades(pokemonHabilidades) {
        let text = " ";
        pokemonHabilidades.forEach((habilidad,index) => {
            text +=`${index+1}) ${habilidad.ability.name}  `
        });
        return text;
    }

    const tiposInfo = document.createElement('p');
    tiposInfo.textContent = " Pokemon tipo: "+tipos(pokemonTipos);

    function tipos(pokemonTipos) {
        let text =" ";
        pokemonTipos.forEach( tipo => {
            text += `> ${tipo.type.name}   `
        });
        return text;
    }



    divDatosPokemon.appendChild(pokemonTitulo);
    divDatosPokemon.appendChild(imagenInfo);
    divDatosPokemon.appendChild(habilidadesInfo);
    divDatosPokemon.appendChild(tiposInfo);
}

 