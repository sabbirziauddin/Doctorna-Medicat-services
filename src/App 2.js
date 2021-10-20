
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Career from './components/Career/Career';
import Services from './components/Services/Services';
import DoctorPortal from './components/DoctorPortal/DoctorPortal';
import Admit from './components/Admit/Admit';
import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login';
import NewCart from './components/NewCart/NewCart';


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Navbar></Navbar>
      <Switch>
        <Route exact path ="/" >
          <Home></Home>
        </Route>
        <Route path ="/home">
         <Home></Home>
        </Route>
        <Route path ="/career">
          <Career></Career>
        </Route>
          <Route path="/services">
          <Services></Services>
          
        </Route>
        <Route path = "/doctor">
          <DoctorPortal></DoctorPortal>
        </Route>
          <Route path= "/admit">
            <Admit></Admit>
          </Route>
          <Route path ="/login">
            <Login></Login>
          </Route>
          <Route path="/addService/:id">
            <NewCart></NewCart>
          </Route>
          <Route path = "*">
            <NotFound></NotFound>
          </Route>
        
      </Switch>
      
      </BrowserRouter>

      
      
    </div>
  );
}

export default App;
