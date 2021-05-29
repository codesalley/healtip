import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignUpPage from '../pages/SignUpPage';
import LogInPage from '../pages/LogInPage';

function App() {
  return (

    <Router>
      <Route path="/singup">
        <SignUpPage />
      </Route>
      <Route path="/login">
        <LogInPage />
      </Route>
    </Router>

  );
}

export default App;
