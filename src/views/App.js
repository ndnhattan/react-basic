import logo from "./logo.svg";
import "./App.scss";
import ListTodo from "./Todo/ListTodo";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Nav from "./Nav/Nav";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ListUsers from "./Users/ListUsers";
import DetailUser from "./Users/DetailUser";
import Home from "./example/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />

          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/todo">
              <ListTodo></ListTodo>
            </Route>
            <Route path="/about">
              <div></div>
            </Route>
            <Route path="/users" exact>
              <ListUsers />
            </Route>
            <Route path="/users/:id">
              <DetailUser />
            </Route>
          </Switch>
        </header>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        {/* Same as */}
        <ToastContainer />
      </div>
    </BrowserRouter>
  );
}

export default App;
