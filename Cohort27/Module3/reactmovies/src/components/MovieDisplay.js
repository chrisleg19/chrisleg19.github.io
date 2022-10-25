

const MovieDisplay = (props)=>{
    const {movie} = props
    console.log(movie)
    return(

        <div>
            {/* <h1>Display Movie:</h1> */}
            {/* Remove below when you refresh */}
            <h2>{movie.Title}</h2>
            <h3>{movie.Genre}</h3>
            <img className="poster" src={movie.Poster} alt={movie.Title} />
            <h4><br/>{movie.Released}</h4>
            <h4>{movie.Plot}</h4>
            

        </div>
    )
}

export default MovieDisplay;