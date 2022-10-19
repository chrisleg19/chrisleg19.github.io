//Note: we are not importing separate components because we are building each one in the app.js file
//Note: we are not importing the CSS file (main.css) because it is called in the index.html file.  The index.html file is connected to the app.js file through: ReactDOM.render(<App/>, document.getElementById("root"))


//Header Component
const Header = () =>{
    return(
        <div>
            <h1>React Tic Tac Toe</h1>
        </div>
    )
}

//Player & Scoreboard component
const Player = (props) =>{
    return(
        <div className={props.whichPlayer}>
           <h2>Player {props.whichPlayer}</h2>
           <h3>Wins:</h3>
        </div>
    )
}

//Board component:
const Board = (props) =>{
    return(
        <div className="board">
            <Square/>
            <Square/>
            <Square/>
            <Square/>
            <Square/>
            <Square/>
            <Square/>
            <Square/>
            <Square/>
        </div>
    )
}

//Square Component
const Square = (props) =>{
    return(
        <div>
            <h4>square</h4>
        </div>
    )
}

//App Component
//All components should be rendered to the App component.  The App component is then rendered to the "root" div (id="root") in the .html file.  This is done through: ReactDOM.render(<App/>, document.getElementById("root"))

const App = () =>{
    return(
        <div>
            <Header/>
            <Player whichPlayer='X'/>
            <Player whichPlayer='O'/>
            <Board/>

        </div>
    );
}

//ReactDom.render is taking the <App/> component and rendering it to the "root" div in the .html doc. 
//Parameters: (Component (or app) you want to render, where you want to render it)
ReactDOM.render(<App/>, document.getElementById("root"))