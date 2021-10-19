import { HashRouter, Switch, Route } from "react-router-dom";

import Header from "./components/header/header.js";
import Footer from "./components/footer/footer.js";

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