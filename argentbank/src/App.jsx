import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import Profile from './pages/Profile';
import Footer from './components/Footer';

import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={SignIn} />
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
