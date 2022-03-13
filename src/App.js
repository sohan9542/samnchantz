import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Topbar from "./layout/Topbar";
import Sidebar from "./layout/Sidebar";
import Dashboard from "./component/Dashboard";
import Signup from "./authentication/Signup";
import Login from "./authentication/Login"
import Userspage from "./component/Userspage";

const App = () => {
  const [showsidebar, setShowsidebar] = useState(true);
  const [isauthenticated, setIsauthenticated] = useState(false);
  return (
    <div className=" min-h-screen">
      <Router>
        {!isauthenticated ? (
          <>
            <Switch>
              <Route exact path="/">
                <Signup />
              </Route>
              <Route path="/login">
                <Login setIsauthenticated={setIsauthenticated} isauthenticated={isauthenticated}/>
              </Route>

            </Switch>
          </>
        ) : (
          <>
            {showsidebar && <Sidebar setShowsidebar={setShowsidebar} />}
            <div>
              <Topbar
                showsidebar={showsidebar}
                setShowsidebar={setShowsidebar}
              />
            </div>
            <div className={showsidebar ? " ml-0 lg:ml-60" : "ml-0"}>
              <Switch>
                <Route exact path="/">
                  <Dashboard />
                </Route>
                <Route  path="/users">
                  <Userspage />
                </Route>
              </Switch>
            </div>
          </>
        )}
      </Router>
    </div>
  );
};

export default App;
