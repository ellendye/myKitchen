import './App.css';
import { Router } from '@reach/router';
import Home from './views/Home'
import Navbar from './components/Navbar'
import LogReg from './views/LogReg';
import Browse from './views/Browse'
import Calendar from './components/Calendar'
import 'bootstrap/dist/css/bootstrap.min.css'
import SearchResults from './views/SearchResults'
import View from './views/View'
import BrowseWine from './views/BrowseWine'
import ViewWine from './views/ViewWine';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
        <Home path='/'/>
        <LogReg path='/login'/>
        <Browse path='/browse'/>
        <Calendar path='/mymenu'/>
        <BrowseWine path='/wine'/>
        <SearchResults path='/search/:term'/>
        <View path='/recipe/:id'/>
        <ViewWine path='/wine/:varietal'/>
      </Router>
    </div>
  );
}

export default App;
