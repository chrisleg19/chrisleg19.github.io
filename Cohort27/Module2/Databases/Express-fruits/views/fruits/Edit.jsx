const React = require("react")


class Edit extends React.Component{
    render(){
        //testing we can render correct data
        console.log("from edit page",this.props.fruit)
        //destructuring:
        const {fruit} = this.props
        return(
            <div>

                <h1>Edit Page</h1>

                <form action={`/fruits/${fruit._id}?_method=PUT`} method="POST">
                    Name: <input type="text" name="name" defaultValue={fruit.name}/>
                    <br/>
                    
                    Color: <input type="text" name="color" defaultValue={fruit.color}/>
                    <br/>
                    
                    Ready to Eat: {fruit.readyToEat ? 
                    <input type="checkbox" name="readyToEat" defaultChecked/> :
                    <input type="checkbox" name="readyToEat"/>}
                    <br/>
                    <input type="text" name="image" placeholder="image url" defaultValue={fruit.image}></input>
                    <br/>
                    
                    <input type="submit" value="Update Fruit"  />

                </form>

            </div>

        )

    }

}

module.exports = Edit