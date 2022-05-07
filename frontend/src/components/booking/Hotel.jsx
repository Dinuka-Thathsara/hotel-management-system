import useFetch from "../useFetch";
import { Link, useParams } from "react-router-dom";
import './Hotel.css';
import HotelCard from "../HotelCard/HotelCard";

const Hotel = (props) => {
    let {hotelID} = useParams()
    var {data, isPending, error} = useFetch(`http://localhost:3001/book/hotel/${hotelID}`)
    if(data){
        data.rooms.forEach(room => {
            room.bookUrl = `/room/${room.roomID}`
            if(room.available==1 || room.available==0){
                room.available = room.available==1 ? "Yes" : "No"
            }
        });
    }
    return (
        <>
        
        {isPending && <p> Loading...</p>}
        {error && <p>ERROR OCCURED!! : {error} </p>}
        {data && 
            
            <div className="container hotel">

                <div className="row mb-5">
                    <h2>Hotel Details</h2>
                </div>
                

                <div className="row hotel-card mb-5">
                    <HotelCard hotel={data.hotelDetails} />
                </div>


                <div className="row">
                    <div className="col-md-12">
                        <h4 className="text-center mb-4">Room Details</h4>
                        <div className="table-responsive">
                            <table className="table">
                                <thead className="thead-dark">
                                    <tr>
                                        <th>Room ID</th>
                                        <th>Room Name</th>
                                        <th>Number of people</th>
                                        <th>AC / Non-AC</th>
                                        <th>Available</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                {data.rooms.map(room => (
                                    <tr key={room.roomID}>
                                        <td> {room.roomID} </td>
                                        <td> {room.name} </td>
                                        <td><i className="fa fa-users"></i> {room.num_of_people} </td>
                                        <td> {room.ac_or_non_ac} </td>
                                        <td> {room.available} </td>
                                        <td><Link className='btn btn-primary' to={room.bookUrl}>Book Room</Link></td>
                                    </tr>
                                ))}                                
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>





            </div>
        }
        </>
    );
}
 
export default Hotel;