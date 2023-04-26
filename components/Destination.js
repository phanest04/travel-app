import HonoluluImg from "../photos/honolulu.jpeg";
const Destination = () =>{
return(
 <div className = "destination">
     <h1>Please Type in the Destination </h1>
    <h3>Location of Pick-Up</h3>
    <h3>Time & Date of Pick-Up:</h3>
    <h3>Type of Transportation</h3>

<div className = "first-destination">
    <div className="destination-text">
        <h2>Honolulu, Hawaii</h2>
        <p>Want to take a trip to Honolulu? Honolulu has one of the most stunning, beautiful landscapes. Go on a nice morning hike at Diamond Head and go visit the Pearl Harbor for some historic visuals. </p>
    </div>
    <div className="image">
        <img alt="img" src={HonoluluImg}/>
    </div>
</div>
 </div>

);
}
export default Destination;
