import './App.css';
import Create from './views/Create';
import Main from './views/Main';
import Show from './views/Show';
import Edit from './views/Edit';
import {Router, Link} from '@reach/router';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {


  return (
    <div className="App">
      <div className="d-flex justify-content-around">
      <Link to="/create">Create Product</Link>
      </div>
      <Router>
      <Create path="/create"/>
      <Main path = "/"/>
      <Show path="/:id"/>
      <Edit path="/update/:id"/>

      </Router>
    </div>
  );
}

export default App;
