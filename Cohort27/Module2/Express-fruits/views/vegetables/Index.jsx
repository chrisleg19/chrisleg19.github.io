const React = require("react")


class Index extends React.Component{
    render(){
        //example without destructuring:  const veggies = this.props.vegetables
        const {vegetables} = this.props
        console.log(vegetables)
        return(
            <div>
                <h1>All Vegetables</h1>

                <ul>{vegetables.map((vegetable, idx)=>( 
                <li key={idx}>The <a href={`/vegetables/${idx}`}>{vegetable.name}</a> is {vegetable.color}{", "} <br/> {vegetable.readyToEat ? `and it is ready to eat` : `and it is NOT ready to eat`} <br/>

                <a href ={`/vegetables/${idx}`}>
                <img src={vegetable.image} width="200px" border="2px solid black"/></a>

                </li>
                ))}</ul>
            </div>
        )
    }
}

module.exports = Index;



//Note: When you get the error message below:
    //Warning: Each child in a list should have a unique "key" prop.

//This is React saying that the "list element" (the li in the example above) should have a key property.  The fix is inserting a key property ( <li key={idx}></li> )