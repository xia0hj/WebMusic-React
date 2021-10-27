import { HashRouter, Switch, Route } from "react-router-dom";

import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer.js";

import Discover from "../discover/index"


export default function App() {
    return (
        <HashRouter>
            <Header></Header>
            <Switch>
                <Route exact path='/' component={Discover}></Route>
                <Route path='/discover' component={Discover}></Route>

            </Switch>
            <Footer></Footer>
        </HashRouter>
    );
}