import { HashRouter, Switch, Route } from "react-router-dom";
import Footer from "./footer.js";
import Header from "./header.js";

import Discover from "../discover/index"


export default function App() {
    return (
        <HashRouter>
            <Header></Header>
            <Switch>
                <Route exact path='/' component={Discover}></Route>
                <Route exact path='/discover' component={Discover}></Route>
            </Switch>
            <Footer></Footer>
        </HashRouter>
    );
}