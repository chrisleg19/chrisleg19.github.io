const React = require("react")

class Index extends React.Component{
    render(){
        const {pokemon} = this.props 
        console.log(pokemon)   
        return(
            <body style={styles.body}>
            
                
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/269px-International_Pok%C3%A9mon_logo.svg.png?20150121202211" alt="pokemon" />

                <a style={styles.createNew} href="/pokemon/new">Create New Pokemon</a>

                <ul style={styles.ul}>{pokemon.map((poke,idx)=>(
                    <li style={styles.li} key={idx}><a href={`/pokemon/${idx}`}>{poke.name}</a> is type {poke.type}.
                    <br/>
                    It's listed at number {poke.number}, and {poke.isCool ? `is cool!` : `is NOT cool.`}
                    <br/>
                    <a href={`/pokemon/${idx}`}>
                        <img src={poke.image} /></a>
                    <br/>
                    <a href={`/pokemon/${idx}/edit`}>Edit this Pokemon</a>
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