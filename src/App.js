
import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Career from './components/Career/Career';
import Services from './components/Services/Services';
import DoctorPortal from './components/DoctorPortal/DoctorPortal';
import Admit from './components/Admit/Admit';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import Card from './components/Card/Card';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Footer from './components/Footer/Footer';
import Registration from './components/Registration/Registration';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
      <Navbar></Navbar>
      <Switch>
        <Route exact path ="/">
          <Home></Home>
        </Route>
        <Route path ="/home">
          <Home></Home>
        </Route>
        <Route path ="/career">
          <Career></Career>
        </Route>
        <Route path ="/services">
          <Services></Services>
        </Route>
        <PrivateRoute path="/doctor">
          <DoctorPortal></DoctorPortal>

        </PrivateRoute>
        <PrivateRoute path ="/admit">
          <Admit></Admit>
        </PrivateRoute>
        <Route path="/login">
          <Login></Login>
        </Route>
            <Route path= '/singup'>
              <Registration></Registration>
            </Route>
          <PrivateRoute path="/addService/:id">
            <Card></Card>
          </PrivateRoute>
        <Route path ="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
      
      </BrowserRouter>
      </AuthProvider>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
