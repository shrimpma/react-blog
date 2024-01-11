import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div>
      <div  className="main-menu">
        <h1>the dojo blog </h1>

        <div className="menu">
          <Link to="/"> Home  </Link> 

           <Link to="/about"> About </Link> 
           <Link to="/blogs "> blogs  </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
