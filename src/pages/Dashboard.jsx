import { Link } from "react-router-dom";
import { useState, useEffect } from 'react'


export default function Dashboard({apikey}) {

// use popular active api to get list of stock and get list of information
// use a usestate? then use a use effect to get the data to display constantly?
//

    const url = `https://financialmodelingprep.com/api/v3/stock_market/actives?apikey=${apikey}`
    const [active,setActive] = useState(null)

    async function getActive(){
        const data = await (await fetch(url)).json()
        setActive(data)
    }

    useEffect(()=>{getActive()},[])
    console.log("this is active", active)
    function loaded(){
        return (
            <div className="dashboard">
              <table>
                <tr>
                  <th>Company Name</th>
                  <th>Price</th>
                  <th>Change</th>
                </tr>
                {active.map(({ name, symbol, price, change }) => (
                  <tr>
                    <td>
                      <Link key={symbol} to={`/stocks/${symbol}`}>
                        {name}
                      </Link>
                    </td>
                    <td>{price}</td>
                    <td>{change}</td>
                  </tr>
                ))}
              </table>
            </div>
          );
    }

    function loading(){
        return <h1>loading ....</h1>
    }
    
    return active ? loaded() : loading()
  
}
