const React = require("react")



class Index extends React.Component{
    render(){
        console.log(this.props.fruits)
        const {fruits} = this.props
        return(
            <body style={{backgroundColor:"#218c74"}}>
            <div style={styles.container} >
                <div style={styles.top}>
                <h1 style={styles.header}>All Fruits</h1>
                <a style={styles.createNewFruit} href="/fruits/new">Create New Fruits</a>
                </div>
                <ul style={{display:"flex", flexWrap:"wrap"}}>{fruits.map((fruit, idx)=>(
                        <li style={styles.li} key={idx}>The <a href={`/fruits/${fruit._id}`}>{fruit.name}</a> is {fruit.color}{" "} <br/>
                            {fruit.readyToEat ? `It is ready to eat` : `It is not ready to eat`} <br/>

                        <a href={`/fruits/${fruit._id}`}>
                            <img src={fruit.image} style={{ width:"200px", height:"200px", objectFit:"cover", border:"2px solid black"}}/> 
                        </a>

                        <form action={`/fruits/${fruit._id}?_method=DELETE`} method="POST">
                            <input type="submit" value="Delete" />

                        </form>
                        
                        <a href={`/fruits/${fruit._id}/edit`} style={styles.editThisFruit}>Edit This Fruit</a>

                        </li>
                ))}</ul>
            </div>
            </body>
        )
    }
}

const styles = {

    top:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",

    },

    container: {backgroundColor:"#33d9b2"},
    
    header: {color:"#fff", fontSize: "50px"},
    
    createNewFruit: {
        fontSize: "20px", 
        backgroundColor: "#f7f1e3", 
        borderRadius:"10px", 
        padding:".5rem",
        textDecoration:"none"
    },

    li: { 
        margin: "1rem",
        listStyleType: "none",
        
    },

    editThisFruit: {
        textDecoration:"none",
        padding:"2px",
    }
    }



module.exports = Index