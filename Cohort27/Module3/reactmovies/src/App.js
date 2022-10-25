//importing useState hook
import {useState, useEffect} from "react"
//importing MovieDisplay module
import MovieDisplay from "./components/MovieDisplay"
//importing Form module
import Form from "./components/Form"
//importing css file
import './App.css';

function App() {
  //state to hold the movie data
  const [movie, setMovie] = useState(null)

  //use useEffect to make the API call as soon as the App component is rendered
    //useEffect runs as soon as the App component is rendered or refreshed
    //setting "minions" as the default data 
  useEffect(()=>{
    getMovie("minions")
  },[])


//=========TO GET MULTIPLE MOVIES==================
  //1. create another state for multiple movies:  const [movies, setMovies] = useState(null)
  //2. create another function (getMovies) for multiple movies 
  //3. to get multiple movies, change the "t" after the API key to "s" (see API docs)
  //4. Then change setMovie(data) to setMovie(data.Search) because the data returned is an array (Search)
  //5. Finally map over movie (in the <MovieDisplay/> component) to display all movies
//=================================================


  //function to fetch movie data
  const getMovie = async (searchTerm) => {
    try{

    //variable to store data from fetch request
    const res = await fetch(`http://www.omdbapi.com/?apikey=98c6a8e8&t=${searchTerm}`)
    
    //parsing the data to json
    const data = await res.json()
    console.log(data)

    //set the data into our state
    setMovie(data)

    } catch (error){
      console.log(error)
    }
  }

  //NOTE: use && to check if movie (state) is a truthy statement.  If true, then render <MovieDisplay/>
  return (
    <div className="App">
      <h1>React Movies</h1>
      <Form movieSearch={getMovie}/>
      {movie && <MovieDisplay movie={movie}/>}
      
    </div>
  );
}

export default App;
