// client/src/components/App.js
import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Login/Login";
import Signup from "./SignUp";
import Home from "./Home";

import './App.css';
import Navbar from "./Navbar";
import PlanetDetail from "./PlanetDetail";


// make route for each planet detail

function App() {
  const [user, setUser] = useState("")

  useEffect(() => {
    fetch("/me")
      .then((r) => {
        if (r.ok) {
          r.json().then((user) => setUser(user))
        }
      });
  }, [])
  console.log(user)

  return (
  
    <Switch>
      <>
    
      <Navbar />
      
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login
              user={user}
              setUser={setUser} />
          </Route>
          <Route exact path="/signup">
            <Signup
              setUser={setUser}
            />
          </Route>
          <Route exact path="/planets/:id">
            <PlanetDetail user={user} />
          </Route>
         
      </>
      </Switch>
   

  );
}

export default App;