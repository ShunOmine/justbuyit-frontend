import React, {Component} from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import App from "../components/App";
import Contact from "../static/Cantact";
import QA from "../static/QA";
import Term from "../static/Term";
import Privacy from "../static/Privacy";
import UserIndex from "../components/Users/Index";
import UserEdit from "../components/Users/Edit";
import UserProfileEdit from "../components/Users/ProfileEdit";
import UserNotice from "../components/Users/Notice";
import SignUp from "../components/Users/SignUp";
import SignIn from "../components/Users/SignIn";

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
          <Route path="/users/sign_up" component={SignUp} />
          <Route path="/users/sign_in" component={SignIn} />
          <Route path="/users/:unique_key" component={UserIndex} />
          <Route path="/users/:unique_key/edit" component={UserEdit} />
          <Route path="/users/:unique_key/notice" component={UserNotice} />
          <Route path="/users/profile/:unique_key/edit" component={UserProfileEdit} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default Root
