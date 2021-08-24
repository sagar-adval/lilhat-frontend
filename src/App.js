import "./App.css";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Chat from "./components/chat/chat";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Chat} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route render={() => <h1>Looks like you're lost</h1>} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
