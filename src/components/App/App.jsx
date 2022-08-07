import {
  HashRouter as Router,
  Route,
} from 'react-router-dom';
import Home from '../Home/Home';
import './App.css';
import EditForm from '../StudentDetail/EditForm';




function App() {

    return (
        <div className="App">
            <header className="App-header">
                <h1 className="App-title">GitHub Student List with Edit!</h1>
            </header>
            <Router>
                <Route exact path="/" component={Home} />
                {/* TODO Add Edit Route */}
                <Route exact path="/edit" component={EditForm} />
            </Router>
        </div>
    );

}

export default App;
