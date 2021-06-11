

import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Home from './Pages/Homepage/Home';
import About from './Pages/About/About';
import Menu from './Pages/Menu/Menu';
import Staff from './Pages/Staff/Staff';
import Booking from './Pages/Booking/Booking';
import Review from './Pages/Review/Review';
import Contact from './Pages/Contact/Contact';

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/menu' component={Menu}/>
        <Route path='/staff' component={Staff}/>
        <Route path='/booking' component={Booking}/>
        <Route path='/review' component={Review}/>
        <Route path='/contact' component={Contact}/>
        
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
