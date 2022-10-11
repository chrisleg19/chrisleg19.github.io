//React Component that will render JSX to browser

//Importing React
const React = require('react')

//Extending class component from React
    class Show extends React.Component {
        render() {                            //Step 1. "render" 
        const fruit = this.props.fruit         //receiving data from fruit:fruits[indexOfFruitsArray] in server.js
        const presentDate = this.props.date    //receiving data from date: new Date().getFullYear() in server.js
        
        return (                               //Step 2. "return" 
                                               //Step 3. "input the html you want to show"     
          //MUST HAVE A PARENT ELEMENT WRAPPING ALL CHILD ELEMENTS(div)
          //you can run any JavaScript inside of the {} brackets (think of it as a portal into JavaScript)
          <body style={styles.body}>
          <div style={styles.container}>
            
          <h1> Show Page </h1>
          <h3>The fruit name is {fruit.name} and the color is {fruit.color}.</h3>  
          <h4>{fruit.readyToEat? 'It is ready to eat' : 'It is not ready to eat... Cant touch this' }</h4>
          <h6>Year: {presentDate}</h6>

          <img src={fruit.image} style={{ width:"200px", height:"200px", objectFit:"cover", border:"2px solid black"}}/>

          <a href="/fruits" style={styles.homeBtn}>Home</a>

          </div>
          </body>
         );
        }
     }
     module.exports  = Show;


     const styles ={
        body:{backgroundColor:"#218c74"},

        container:{
            display:"flex",
            flexDirection:"column",
            backgroundColor:"#33d9b2",
            height:"100%",
        },

        homeBtn: {
            fontSize: "20px",
            textDecoration:"none",
            fontWeight:"bold",
            backgroundColor: "#f7f1e3", 
            borderRadius:"10px", 
            padding:".25rem",
            width:"50px",
            marginTop:"5px",
            marginLeft:"5px",
        }

     }