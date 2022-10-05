const React = require("react");

class New extends React.Component {
  render() {
    return (
      <div>
        <h1>Add new Fruits</h1>

        <form action="/fruits" method="POST">

          Name: <input type="text" name="name" /> 
          <br />
          Color: <input type="text" name="color" /> 
          <br />
          Is Ready to Eat: <input type="checkbox" name="readyToEat" /> 
          <br />
          <input type="text" name="image" placeholder="image url"></input>
          <br/>
          <input type="submit" name="" value="Create New Fruit" />

        </form>
      </div>
    );
  }
}

module.exports = New;


//The <form></form> property "action" where to send the data (/fruits).  So whenever the form is submitted, the POST method is executed.

//The information passed in the form is building an object with properties (name: , color: , isReadyToEat: )


//Canvas assignment link: https://ps-rtt-sei.herokuapp.com/mod-2/week-8/day-2/slides
