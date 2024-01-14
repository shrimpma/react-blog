import './App.css';
import Navbar  from './Navbar';
import Home from './Home';
import About  from './About';

import BlogDetail from './BlogDetail';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Create from './Create';
import NotFound from './Notfound';

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
            <Route exact path="/about">
                <About></About>
            </Route>
           
            <Route exact path="/blogs/:id">
                <BlogDetail/>
            </Route>
            <Route exact path="/create">
                <Create></Create>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>

        </Switch>
        
      </div>
      </div>
    </Router>
   
  );
}

export default App;
