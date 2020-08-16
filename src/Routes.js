import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import LandingPage from "./landingPage/landingPage";
import SearchPage from "./SearchPage/SearchPage"
import AddListingPage from "./AddListingPage/AddListingPage"


export default class Routes extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact><LandingPage /></Route>
                    <Route path="/AddListing" exact><AddListingPage /></Route>
                    <Route path="/Search" exact><SearchPage /></Route>
                </Switch>
            </BrowserRouter>
        )
    }
}