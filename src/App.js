import { HashRouter, Switch, Route } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";

import Discover from "./pages/discover/discover";
import My from "./pages/my/my";
import Friend from "./pages/friend/friend";

export default function App() {
    return (
        <HashRouter>
            <Header></Header>
            <Switch>
                <Route exact path='/' component={Discover}></Route>
                <Route exact path='/discover' component={Discover}></Route>
                <Route exact path='/my' component={My}></Route>
                <Route exact path='/friend' component={Friend}></Route>
            </Switch>
            <Footer></Footer>
        </HashRouter>
    );
}