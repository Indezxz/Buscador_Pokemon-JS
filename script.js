let urlBase = 'https://pokeapi.co/api/v2/pokemon';
// let api_key =  '605507acf87117e111e54a3ab5238541';
// let api_key2 = '18c86db5f9c0c030b9df5f9e5b36c045';

document.getElementById('botonBusqueda').addEventListener('click',() => {

    const pokemon = document.getElementById("pokemonEntrada").value;
   
    if(pokemon) {
    fetchDatosPokemon(pokemon);
    }else{
        alert("ingrese algoo!!")
    }
})

function fetchDatosPokemon(pokemon) {
    fetch(`${urlBase}/${pokemon}`)
    .then(data => data.json())
    .then(data => mostrarDatos(data));
}

function mostrarDatos(data) {
    console.log(data);
    // Seleccionar DIV y limpiarlo
    const divDatosPokemon = document.getElementById("datosPokemon");
    divDatosPokemon.innerHTML="";

    // Constantes traidas del fetch
    const pokemonNombre = data.forms[0].name;
    const pokemonImagen = data.sprites.front_default;
    const pokemonHabilidades =data.abilities;

    //const paisNombre = data.sys.country;
    //const temperatura = data.main.temp;
    //const descripcion = data.weather[0].description;
    //const humedad = data.main.humidity;
    

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
    
    //const temperaturaInfo = document.createElement('p');
    //temperaturaInfo.textContent = `La temperatura es: ${Math.round(temperatura-273.15)} °C`

    

    //const humedadInfo = document.createElement('p');
    //humedadInfo.textContent = `La humedad es: ${humedad} %`;

    //const descripcionInfo = document.createElement('p');
    //descripcionInfo.textContent = `La descripcion metereológica es: ${descripcion}`;
    

    divDatosPokemon.appendChild(pokemonTitulo);
    divDatosPokemon.appendChild(imagenInfo);
    divDatosPokemon.appendChild(habilidadesInfo);
    //divDatosPokemon.appendChild(temperaturaInfo);
    //divDatosClima.appendChild(humedadInfo);
    
    //divDatosClima.appendChild(descripcionInfo);
}

 