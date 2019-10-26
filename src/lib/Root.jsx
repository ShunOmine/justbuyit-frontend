import React, {Component} from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import App from "../components/App";
import Contact from "../static/Cantact";
import QA from "../static/QA";
import Term from "../static/Term";
import Privacy from "../static/Privacy";
import User from "../components/User";

class Root extends Component{
  render () {
    return(
      <BrowserRouter>
        <Switch>
          {/* top */}
          <Route exact path="/" component={App} />
          {/* static */}
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/qa" component={QA} />
          <Route exact path="/term" component={Term} />
          <Route exact path="/privacy" component={Privacy} />
          {/* users */}
          <Route path="/users/:unique_key" component={User} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default Root
