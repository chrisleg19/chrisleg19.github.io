import {useParams} from "react-router-dom"
import { useState, useEffect } from "react";

const Price = ()=>{
    //initializing state variable
    const [coin, setCoin] = useState(null)

    //use the useEffect hook to make api call
    useEffect(()=>{
        getCoin()
    }, [])

    //variable for api key
    const apiKey = "1784A799-0B13-4965-80D6-8C92B9259E14";

    //return an object with the matching URL params
    const params = useParams()

    // console.log(params.symbol)

    //variable for the url
    const url = `http://rest-sandbox.coinapi.io/v1/exchangerate/${params.symbol}/USD?apikey=${apiKey}`


    //Example of a different endpoint:
    // const url = `https://rest-sandbox.coinapi.io/v1/assets?apikey=
    // ${apiKey}`


    const getCoin = async () => {
        try {
            //making fetch request
            const res = await fetch (url)
            //parsing data to json
            const data = await res.json()
            //save the resulting data in state
            setCoin(data)
            // console.log(data)
        } catch (error) {
            console.log(error)
        }
    }


    //======= Rendering =========
    //If data is loaded
    const loaded = () =>{
        return(
            <div>
                <h1>{coin.asset_id_base}/{coin.asset_id_quote}</h1>
                <h2>${coin.rate}</h2>
            </div>
        )
    }

    //If data is still loading
    const loading = () =><h1>Loading...</h1>


    return(
        <div>
            <h1>Price Page</h1>
            {coin && coin.rate ? loaded() : loading()}
        </div>
    )
}

export default Price