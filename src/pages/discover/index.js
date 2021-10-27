import NavBar from "./components/Navbar/Navbar.js";

import { HashRouter, Switch, Route } from "react-router-dom";

import Recommend from "@pages/recommend/index";


export default function discover() {
  return (
    <HashRouter>
      <NavBar></NavBar>
      <Switch>
        <Route exact path='/discover/recommend' component={Recommend}></Route>
      </Switch>
    </HashRouter>
  )
}

