import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import NewComment from "./pages/NewComment";

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route component={Home} exact path="/"></Route>
                <Route
                    component={NewComment}
                    exact
                    path="/novoComentario/:id"
                ></Route>
            </Switch>
        </BrowserRouter>
    );
};

export default App;
