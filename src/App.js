import './App.css';
import Navbar  from './Navbar';
import Home from './Home';
import About  from './About';

import BlogDetail from './BlogDetail';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
     <div className='App'> 
     <Navbar></Navbar>
      <div className="content">
        <Switch>
            <Route exact  path="/">
                <Home/> 
            </Route>
            <Route  path="/about">
                <About></About>
            </Route>
           
            <Route  path="/blogs/:id">
                <BlogDetail/>
            </Route>
        </Switch>
        
      </div>
      </div>
    </Router>
   
  );
}

export default App;
