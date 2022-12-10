import React from 'react';
import {Link} from 'react-router-dom';
import itemPokemon from './pokemonList.json';
import {useParams} from 'react-router-dom';

function Description(){
    const pokemonList = itemPokemon;
    const params = useParams();

    return(
        <div className='main'>
            {/* <div>
                    <img src={ listPokemon[params.id].image } alt=""/>               
                </div> */}
            <h1> { pokemonList[params.id].name}</h1>
            <h2> { pokemonList[params.id].introduction}</h2>
            <Link className='btn' to={'/'}>Back</Link>
        </div>
    )
}

export default Description;