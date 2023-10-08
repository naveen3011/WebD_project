import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import "./form.css"

const Form = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        phone:"",
        tickets: "",
        time: "",
        theatrename: "",
       
      });
    
      let name, value;
      const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value;
    
        setUser({ ...user, [name]: value });
      };
    
      const PostData = async (e) => {
        e.preventDefault();
    
        const { name, email, phone,tickets, time, theatrename } = user;
        if (!name || !email || !phone || !tickets || !time || !theatrename) {
          alert("Please Fill All Fields");
          return console.error();
        }
    
        alert("Booking Successfull")
        navigate(`/`)
      }

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
  <div className="wrapper" >
      <div className="form-left">
          <h2 className="text-uppercase" style={{backgroundColor:"#101317"}}>{data[0].show.name}</h2>
          <p style={{backgroundColor:"#101317"}}>
              Welcome to the <span style={{color:"#F45C84" , backgroundColor:"#101317"}}>BOOKING SYSTEM</span>
          </p>
       <img src={data[0].show.image.original} alt="leftimg"  style={{"height":"150px"}} />
       <p style={{backgroundColor:"#101317"}}>Genres: {data[0].show.genres[0]} , {data[0].show.genres[1]}</p>
       <p style={{backgroundColor:"#101317"}}>Premired on: {data[0].show.premiered}<br/><br/>
       {data[0].show.rating.average === null ? "Rating: No Rating" : `Rating:${data[0].show.rating.average}/10`}
       </p>
          <div className="form-field" style={{backgroundColor:"#101317"}}>
             <Link to='/'><input type="submit" className="account" value="Go Back?"/></Link> 

          </div>
      </div>
      <form className="form-right" method="POST">
          <h2 className="text-uppercase">BOOK A SEAT</h2>
          <div className="row" style={{backgroundColor:"#101317"}}>
              <div className="col-sm-6 mb-3" style={{backgroundColor:"#101317"}}>
                  <label>Name</label>
                  <input type="text" id="first_name" className="input-field" placeholder='Enter your name'
                  name='name'
                  required ={true}
                  value={user.name}
                  onChange={handleInputs}/>
              </div>
              <div className="col-sm-6 mb-3" style={{backgroundColor:"#101317"}}>
                  <label>No. of Tickets</label>
                  <input type="text" id="last_name" className="input-field"  placeholder='No of Tickets'
                  name='tickets'
                  required={true}
                  value={user.tickets}
                  onChange={handleInputs}/>
              </div>
          </div>
          <div className="mb-3" style={{backgroundColor:"#101317"}}>
              <label>Your Email</label>
              <input type="email" className="input-field" placeholder='Enter your email'
                  name='email'
                  required={true}
                  value={user.email}
                  onChange={handleInputs}/>
          </div>
          <div className="mb-3" style={{backgroundColor:"#101317"}}>
              <label>Contact Number</label>
              <input type="number" className="input-field" minLength='10'
                  maxLength='10'
                  placeholder='Enter your number'
                  name='phone'
                  required = {true}
                  value={user.phone}
                  onChange={handleInputs}/>
          </div>
          <div className="row" style={{backgroundColor:"#101317"}}>
              <div className="col-sm-6 mb-3" style={{backgroundColor:"#101317"}}>
                  <label>Time</label>
                  <input type="text" 
                   className="input-field" 
                   placeholder='Enter Time'
                  name='time'
                  required
                  value={user.time}
                  onChange={handleInputs}/>
              </div>
              <div className="col-sm-6 mb-3" style={{backgroundColor:"#101317"}}>
                  <label>Theatre</label>
                  <input type="text" 
                  className="input-field" 
                   placeholder='Enter the Theatre Name'
                  name='theatrename'
                  required={true}
                  value={user.theatrename}
                  onChange={handleInputs}/>
              </div>
          </div>
         
          <div className="form-field" style={{backgroundColor:"#101317"}}>
              <input type="submit" value="Register" className="register" name="register"  onClick={PostData}/>
          </div>
      </form>
      
  </div>
  </>
  )
}

export default Form