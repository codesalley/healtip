import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignUpPage from '../pages/SignUpPage';
import LogInPage from '../pages/LogInPage';
import HomePage from '../pages/HomePage';
import SecuredRoute from '../helpers/SecuredRoute';

function App() {
  return (

    <Router>
      <Route path="/signup">
        <SignUpPage />
      </Route>
      <Route path="/login">
        <LogInPage />
      </Route>
      <SecuredRoute path="/" component={HomePage} />

    </Router>

  );
}

export default App;
