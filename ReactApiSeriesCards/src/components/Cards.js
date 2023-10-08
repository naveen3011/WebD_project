import React, {useEffect , useState} from 'react'
import axios from 'axios'
import "bootstrap/dist/css/bootstrap.css";
import {Link} from 'react-router-dom'
import "./Cards.css"

const Cards = () => {

    const[data , setData] = useState([]);
   
    const getData = async()=>{
        const response = await axios.get("https://api.tvmaze.com/search/shows?q=all")
        setData(response.data);
    }

    useEffect(()=>{
     getData();
    },[])


 return(
    <>
     <h1 className='heading_style'>Series You Can't Miss</h1>
 { data.map((val , index ) => {
    return(
       
        <div className="cards" key={index}>
            <div className="card" >
                <img src={val.show.image.original} alt="" className='card__img' />
                <div className="card__info">
                    <span className="card__category">
                        {val.show.rating.average === null ? "Rating: No Rating" : `Rating:${val.show.rating.average}/10`}
                        <br/>
                        Genres: {val.show.genres[0]} , {val.show.genres[1]}
                        <br/>
                        Duration: {val.show.averageRuntime} min
                        <br/>
                        
                    </span>
                    <h3 className="card__title">{val.show.name}</h3>
                    <Link to = {`/shows/${val.show.id}`}>
                        <button >Know More</button>
                    </Link>
                </div>
            </div>
        </div>
    )
})}


</>
 );
}

export default Cards