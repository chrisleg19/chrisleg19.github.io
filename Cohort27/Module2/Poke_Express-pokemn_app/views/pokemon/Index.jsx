const React = require("react")

class Index extends React.Component{
    render(){
        const {pokemon} = this.props 
        console.log(pokemon)   
        return(
            <body style={styles.body}>
            
                
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/269px-International_Pok%C3%A9mon_logo.svg.png?20150121202211" alt="pokemon" />

                <a style={styles.createNew} href="/pokemon/new">Create New Pokemon</a>

                <ul style={styles.ul}>{pokemon.map((pokemon,idx)=>(
                    <li style={styles.li} key={idx}><a href={`/pokemon/${pokemon._id}`}>{pokemon.name}</a> is type {pokemon.type}.
                    <br/>
                    It's listed at number {pokemon.number}, and {pokemon.isCool ? `is cool!` : `is NOT cool.`}
                    <br/>
                    <a href={`/pokemon/${pokemon._id}`}>
                        <img src={pokemon.image} /></a>
                    <br/>

                    <form action={`/pokemon/${pokemon._id}?_method=DELETE`} method="POST">
                        <input type="submit" value="Delete" />
                    </form>

                    <a href={`/pokemon/${pokemon._id}/edit`}>Edit this Pokemon</a>
                    </li>
                ))}</ul>
                
            
            </body>
        )
    }
}

module.exports = Index;

const styles = {
    body:{
        backgroundColor:"#E8DFCA",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        
    },

    createNew:{
        textDecoration:"none",
        fontWeight:"bold",
        backgroundColor:"#4cd137",
        borderRadius:"10px",
        padding:".5em",
        color:"#fff",
    },

    ul:{
        display:"flex",
        flexWrap:"wrap",
        padding:"0",
        justifyContent:"center",
        
    },
    li:{
        listStyle:"none",
        margin:"5px 10px 5px 10px",
        border:"1px solid #192a56 ",
        padding:"1em",
    },
    
}