const React = require("react");


class New extends React.Component{
    render(){
        return(
            <div>
                <h1>Add new Vegetable</h1>

                <form action="/vegetables" method="POST">

                Name: <input type="text" name="name"/>
                <br/>
                Color: <input type="text" name="color"/>
                <br/>
                Is Ready to Eat: <input type="checkbox" name="readyToEat"/>
                <br/>
                <input type="text" name="image" placeholder="image url"></input>
                <br/>
                <input type="submit" name="" value="Create New Fruit"/>

                    
                </form>
            </div>
        )
    }
}

module.exports = New;