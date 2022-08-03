import {
  HashRouter as Router,
  Route,
} from 'react-router-dom';
import Home from '../Home/Home';
import './App.css';



function App() {

    return (
        <div className="App">
            <header className="App-header">
                <h1 className="App-title">GitHub Student List with Edit!</h1>
            </header>
            <Router>
                <Route exact path="/" component={Home} />
                {/* TODO Add Edit Route */}
            </Router>
        </div>
    );

}

export default App;
