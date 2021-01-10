import logo from './logo.svg';
import './App.css';
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import AppRouter from './router'
function App() {
  return (
    <Router>
    <Switch>
      <Route component={AppRouter} />
    </Switch>
  </Router>
  );
}

export default App;
