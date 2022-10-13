const React = require("react")

class Navbar extends React.Component{
    render(){
        return(
            <nav style={styles} className="navBar">
                <a href="/">Home</a>
                <a href="/blog">Blogs</a>
                <a href="/blog/new">Authors</a>
                <a href="/login">Sign Up / Log In</a>

            </nav>

        )
    }
}

//Add styling for the navbar

const styles ={
    backgroundColor: "#562B08",
    color: "orange",
    textDecoration: "none",
    textShadow: ".5px .5px .5px #D8D8D8",
    fontSize: "1.5em",
    display: "flex",
    justifyContent:"space-evenly",
    paddingTop: ".5em",
    paddingBottom: ".5em",
    fontWeight: "bold",
    fontFamily: "Poppins"
    

}

module.exports = Navbar