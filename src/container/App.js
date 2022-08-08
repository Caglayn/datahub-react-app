import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Login from "../pages/Login";
import MainPage from "../pages/MainPage";

const App = () => {
  const{ loggedIn } = useSelector(store =>({
    loggedIn: store.loggedIn
  }))

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            {loggedIn ? <MainPage/> : <Redirect to="/login" />}
          </Route>
          <Route exact path="/login">
            {loggedIn ? <Redirect to="/"/> : <Login/>}
          </Route>
          <Redirect to="/"/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;