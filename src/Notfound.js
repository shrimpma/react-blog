import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <>
        <h2>Sorry </h2>
        <p> page not found </p>
       <Link to="/"> to the homepage ..</Link>
        </>
        
     );
}
 
export default NotFound;