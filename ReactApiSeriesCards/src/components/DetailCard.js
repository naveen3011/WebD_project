import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate} from 'react-router-dom'
import "./detailcard.css"
import { useParams } from "react-router-dom";

const DetailCard = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  

  const getData = async () => {
    const response = await axios.get(
      `https://api.tvmaze.com/search/shows?q=all`
    );
    const res = response.data
    res.forEach((element)=>{
      if(element.show.id === parseInt(params.id)){
        setData([element]);

        
      }
    })
 
  };

  useEffect(() => {
    getData();
  
  }, );
if(data.length===0) return null;

  return (
  <>
   <h1 className='heading_style'>{data[0].show.name}</h1>
    <div className="container">
      <div className="imgcontainer">
        <img src={data[0].show.image.original} alt="" />
      </div>
      <div className="details">
        <p>Description:- {data[0].show.summary}</p>
        <p></p>
        <p>Genres:  Genres: {data[0].show.genres[0]} , {data[0].show.genres[1]}</p>
        <p>Premired on: {data[0].show.premiered}</p>
        <p>Time: {data[0].show.averageRuntime} min<br/><br/>
         {data[0].show.rating.average === null ? "Rating: No Rating" : `Rating:${data[0].show.rating.average}/10`}
         </p>
         <button onClick={()=>{navigate(`/book/${data[0].show.id}`)}} style={{marginBottom:"15px"}}>BOOK NOW</button>
      </div>
     
    </div>
  </>


  
  );
};

export default DetailCard;
