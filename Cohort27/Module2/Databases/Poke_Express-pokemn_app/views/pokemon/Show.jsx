const React = require("react")

class Show extends React.Component{
    render(){
        const {pokemon} = this.props 
        return(
            <div>
                <h1>Pokemon Stats</h1>
                <h2>{pokemon.name}</h2>
                <img src={pokemon.image} />
                <h4>Height: {pokemon.height}</h4>
                <h4>Weight: {pokemon.weight}</h4>
                <h4>Abilities: {pokemon.abilities}</h4>
                <a href={"/pokemon"}>Home</a>
                
            </div>
        )
    }
}

module.exports = Show;