const React = require("react");
const pokemonArray = require("../../models/listOfPokemon");


class Edit extends React.Component{
    render(){
        console.log("from edit page", this.props.pokemon)
        const {pokemon} = this.props
        console.log(pokemon)
        return(
            <body style={styles.body}>
                
                <h1>Edit Pokemon</h1> 

                <form style={styles.form} action={`/pokemon/${pokemon._id}?_method=PUT`} method="POST">
                
                Name:<input style={styles.name} type="text" name="name" defaultValue={pokemon.name}/>
                <br/>
                Type:<input style={styles.type}  type="text" name="type" defaultValue={pokemon.type}/>
                <br/>
                Number:<input style={styles.number} type="text" name="number" defaultValue={pokemon.number}/>
                <br/>
                Image:<input style={styles.image}  type="text" name="image" placeholder="image url" defaultValue={pokemon.image}/>
                <br/>
                Is Cool:<input style={styles.isCool}  type="checkbox" name="isCool" defaultChecked={pokemon.isCool}/>
                <br/>
                Height:<input style={styles.height}  type="text" name="height" placeholder="Ex: 2ft. 4 in." defaultValue={pokemon.height}/>
                <br/>
                Weight:<input style={styles.weight}  type="text" name="weight" placeholder="Ex: 15.2 lbs." defaultValue={pokemon.weight}/>
                <br/>
                Abilities:<input style={styles.abilities}  type="text" name="abilities" defaultValue={pokemon.abilities}/>
                <br/>
                
                <input style={styles.button} type="submit" value="Edit Pokemon" />
                
                </form>
                

            </body>
        )
    }
}

module.exports = Edit

const styles = {

    body:{
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
    },

    form:{
        margin:"20px",
        lineHeight:"50px",
        border:"2px solid black",
        borderRadius:"10px",
        width:"20em",
        paddingLeft:"2em",
        boxShadow:"2px 2px 2px black",

    },

    name:{
        marginLeft:"1.5em",
        border:"2px solid black",
        width:"15em",     
    },
    
    type:{
        marginLeft:"2em",
        border:"2px solid black",
        width:"15em",     
    },

    number:{
        marginLeft:".6em",
        border:"2px solid black",
        width:"15em",
    },
    
    image:{
        marginLeft:"1.5em",
        border:"2px solid black",
        width:"15em",     
    },
    
    isCool:{
        marginLeft:"1em",
        border:"2px solid black",
        width:"15em",     
    },
    
    height:{
        marginLeft:"1.3em",
        border:"2px solid black",
        width:"15em",     
    },
    
    weight:{
        marginLeft:"1.2em",
        border:"2px solid black",
        width:"15em",     
    },
    
    abilities:{
        marginLeft:".5em",
        border:"2px solid black",
        width:"15em",     
    },

    button:{
        width:"20em",
        height:"2em",
        marginLeft:"1em",
        backgroundColor:"#273c75",
        fontWeight:"750",
        color:"white",
    },
    
}