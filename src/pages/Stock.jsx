import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

export default function Stock({apikey}){

   
    const { symbol } = useParams()
    

    const url = `https://financialmodelingprep.com/api/v3/profile/${symbol}?apikey=${apikey}`



    const [stock, setStock] = useState(null)
  
    const getStock = async () => {
        const data = await (await fetch(url)).json()
        
        setStock(data[0])
    }
    
    // console.log(stock)
    useEffect(()=>{getStock()},[])

    function loaded(){
        return(
            <div className="loaded">
                <h1>{stock.companyName}</h1>
                <h2>{stock.price}</h2>
           </div>
        )
    }

    function loading(){
        return <h1>loading ...</h1>
    }


    return stock ? loaded() : loading()
}