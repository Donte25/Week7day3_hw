console.log('Poke_Dex!')

const getpokemon = async (e) => {
    e.preventDefault();
    console.log('Form Submitted!')
    let name = e.target.name.value
    if (name=='')name = {};
    
    console.log(name)
    const url = `https://pokeapi.co/api/v2/pokemon/${''}`
    const res = await fetch(url)
    const data = await res.json()
    console.log(data)

    const container = document.getElementById('container')
    container.innerHTML = ''
    if (Array.isArray(data)){
        for (let pokemon of data){
            let card = `
        <div>
            <h3>${pokemon.name}</h3>
            <h5>${pokemon.abilities}</h5>
            <h5>${pokemon.hp}</h5>
            <h5>${pokemon.attack}</h5>
            <h5>${pokemon.defense}</h5>
        </div>
        `
        container.innerHTML += card
        }
    }
    else {
        let card = `
        <div>
            <h3>${data.name}</h3>
            <h5>${data.abilities}</h5>
            <h5>${data.hp}</h5>
            <h5>${data.attack}</h5>
            <h5>${data.defense}</h5>
        </div>
        `
        container.innerHTML = card
    }


}

const form = document.querySelector('form')
form.addEventListener('submit', getpokemon)