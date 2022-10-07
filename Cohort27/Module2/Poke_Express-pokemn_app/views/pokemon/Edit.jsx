const React = require("react");
const pokemonArray = require("../../models/listOfPokemon");


class Edit extends React.Component{
    render(){
        console.log("from edit page", this.props)
        const {indexOfPokemonArray} = this.props
        return(
            <body style={styles.body}>
                
                <h1>Edit Pokemon</h1>

                
                <form action="/pokemon" method="POST" style={styles.form}>
                
                Name:<input style={styles.name} type="text" name="name"/>
                <br/>
                Type:<input style={styles.type}  type="text" name="type"/>
                <br/>
                Image:<input style={styles.image}  type="text" name="image" placeholder="image url" defaultValue={pokemonArray[indexOfPokemonArray]}/>
                <br/>
                Is Cool:<input style={styles.isCool}  type="checkbox" name="isCool"/>
                <br/>
                Height:<input style={styles.height}  type="text" name="height" placeholder="Ex: 2ft. 4 in."/>
                <br/>
                Weight:<input style={styles.weight}  type="text" name="weight" placeholder="Ex: 15.2 lbs."/>
                <br/>
                Abilities:<input style={styles.abilities}  type="text" name="abilities"/>
                <br/>
                
                <input style={styles.button}type="submit" value="Edit" />
                
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