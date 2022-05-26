import {useState,useEffect} from "react";
import Axios from 'axios';
import Hotel_View from './view_Hotel';
import 'react-toastify/dist/ReactToastify.min.css';
import {ToastContainer,toast} from 'react-toastify'
import { useParams } from "react-router-dom";

function Hotel_Adding_form()  {

    const[name,setName]=useState("");
    const[star_rating,setStar_Rating]=useState("");
    const[facilities,setFacilities]=useState("");
    const [street_number,setStreet_Number]=useState("");
    const[street_name,setStreet_Name]=useState("");
    const{id}=useParams();
    // useEffect(() =>{
    //   Axios.get(http://localhost:3001/get/${id}).then((resp)=>)
    // }),[id])
    const handleSubmit=e=>{
      e.preventDefault();
      console.log("submited");
    };
    const addHotel=()=>{
      
      if (!name || !star_rating || !facilities || !street_number || !street_name){
        toast.error("Please Provide Values for All");}
      else{
      Axios.post('http://localhost:3001/create',{
        name:name,
        star_rating:star_rating,
        facilities:facilities,
        street_number:street_number,
        street_name:street_name,
      }).then(() =>{
        toast.success("Hotel Added");
      })
    }
    };
    return (
      <div>
          <Hotel_View/>
          
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label  className="form-label">
            Name
          </label>
          <input
            type="text"
            onChange={(event) => {setName(event.target.value)}}
            className="form-control"
            id="name"
            aria-describedby="nameHelp"
          />
          {/* <div id="emailHelp" class="form-text">
            We'll never share Hotel email with anyone else.
          </div> */}
        </div>
        <div className="mb-3">
          <label  className="form-label">
            Star Rating
          </label>
          <select value={star_rating} onChange={event=>setStar_Rating(event.target.value)} className="form-select" aria-label="Default select example">
            <option >One Star</option>
            <option >Two Star</option>
            <option >Three Star</option>
            <option >Four Star</option>
            <option >Five Star</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">
            Mention Facilities
          </label>
          <input
            type="text"
            onChange={(event) => {setFacilities(event.target.value)}}
            className="form-control"
            id="facilities"
            aria-describedby="facilitiesHelp"
          />
         
        </div>
        <div className="mb-3">
          <label  className="form-label">
            Street Number
          </label>
          <input
            type="text"
            onChange={(event) => {setStreet_Number(event.target.value)}}

            className="form-control"
            id="s_number"
            aria-describedby="s_number_Help"
          />
        
        </div>
        <div className="mb-3">
          <label  className="form-label">
            Street Name
          </label>
          <input
            type="text"
            onChange={(event) => {setStreet_Name(event.target.value)}}

            className="form-control"
            id="s_name"
            aria-describedby="s_number_Help"
          />
        
        </div>

        
      </form>
       
      <button 
         onClick={addHotel} type="submit" className="btn btn-primary">
          Add Hotel
        </button>

      </div>
    );
  }


export default Hotel_Adding_form;