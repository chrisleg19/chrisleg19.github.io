const React = require ("react");


class Show extends React.Component{
    render(){
        //example without destructuring: const vegetable = this.props.vegetable
        const {vegetable} = this.props
        return(
            <div>

                <h1>Vegetable Show Page</h1>
                <h3>The vegetable name is {vegetable.name} and the color is {vegetable.color}.</h3>
                <h4>{vegetable.readyToEat ? `It is ready to eat` : `It is not ready to eat...Cant touch this`}</h4>

                <div>
                    <h2>The product name is {vegetable.name}</h2>

                    <h3>The color is {vegetable.color}</h3>

                    <h4>Is the vegetable ready to eat? {vegetable.readyToEat ? `Yes` : `No`}</h4>
                </div>

            </div>
        )
    }
}

module.exports = Show;