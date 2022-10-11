const React = require("react")


class Index extends React.Component{
    render(){
        //example without destructuring:  const veggies = this.props.vegetables
        const {vegetables} = this.props
        console.log(vegetables)
        return(
            <body style={{backgroundColor:"#ffb142"}}>
            <div style={{backgroundColor:"#ffda79"}}>
                <h1>All Vegetables</h1>

                <a href="/vegetables/new">Create New Vegetable</a>

                <ul style={{display:"flex", flexWrap:"wrap"}}>{vegetables.map((vegetable, idx)=>( 
                <li key={idx}>The <a href={`/vegetables/${idx}`}>{vegetable.name}</a> is {vegetable.color}{", "} <br/> {vegetable.readyToEat ? `and it is ready to eat` : `and it is NOT ready to eat`} <br/>

                <a href ={`/vegetables/${idx}`}>
                <img src={vegetable.image} style={{width:"200px", height:"200px", objectFit:"cover", border:"2px solid black"}}/></a>

                </li>
                ))}</ul>
            </div>
            </body>
        )
    }
}

module.exports = Index;



//Note: When you get the error message below:
    //Warning: Each child in a list should have a unique "key" prop.

//This is React saying that the "list element" (the li in the example above) should have a key property.  The fix is inserting a key property ( <li key={idx}></li> )