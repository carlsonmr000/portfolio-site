
import React from "react";
import "./App.css";
import LogIn from "./screens/LogIn/LogIn";
import { Route, Switch } from "react-router-dom";
import { verify } from "./services/users";
import { useState, useEffect } from "react";
import Layout from "./components/Layout/Layout";
import Home from "./screens/Home/Home.jsx";
import AddProject from "./screens/AddProject/AddProject.jsx";
import EditProject from "./screens/EditProject/EditProject.jsx";
import Messages from "./screens/Messages/Messages.jsx";
import Aos from "aos";
import "aos/dist/aos.css";
import "./App.css";

const App = () => {
  const [user, setUser] = useState(null);
  const [toggleFetch, setToggleFetch] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await verify();
      setUser(user ? user : null);
    };
    Aos.init({ duration: 1500 });
    fetchUser();
  }, [toggleFetch]);

  return (
    <div className="app">
      <Layout setToggleFetch={setToggleFetch} toggleFetch={toggleFetch} user={user} setUser={setUser}> 
        <Switch>
          <Route exact path="/">
            <Home user={user} />            
          </Route>
          <Route exact path="/log-in">
            <LogIn setUser={setUser} />
          </Route>
          <Route exact path="/add">
          <AddProject setUser={setUser} user={user} />
          </Route>
          <Route exact path="/edit/:id">
          <EditProject user={user} setUser={setUser} />
          </Route>
          <Route exact path="/messages">
          <Messages user={user} />
          </Route>
        </Switch>
      </Layout>
      
    </div>
  );
};

export default App;