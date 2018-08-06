
/*
 *  Simple Filter Function to use in PokemonData
 *
 *  @param {string} searchTerm
 *  @param {array} pokemon
 * 
 * Eventually would like to filter on region then search term
 */

export default function searchPokemon(searchTerm, pokemon){
    const searched = pokemon.filter(p => 
        p.name.toLowerCase().startsWith(searchTerm.toLowerCase())
    );
    
    //console.log(searched);

    return searched.slice();
}