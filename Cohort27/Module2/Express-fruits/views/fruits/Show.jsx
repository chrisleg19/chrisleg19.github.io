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
          <div>
            
          <h1> Show Page </h1>
          <h3>The fruit name is {fruit.name} and the color is {fruit.color}.</h3>  
          <h4>{fruit.readyToEat? 'It is ready to eat' : 'It is not ready to eat... Cant touch this' }</h4>
          <h6>Year: {presentDate}</h6>

          </div>
         );
        }
     }
     module.exports  = Show;