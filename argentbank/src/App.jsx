import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/profile" component={Profile} />
        <Route
          path="*"
          render={() => (
            <p className="error-msg">
              Page not found <br /> Error 404
            </p>
          )}
        />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}
