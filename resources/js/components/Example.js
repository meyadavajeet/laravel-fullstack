import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AddContact from './AddContact';
import Contacts from './Contacts';
import NavBar from './NavBar';

function Example() {
    return (
       <>
       <Router>
       <NavBar />
            <Switch>
                <Route path="/" exact component={Contacts} />
                <Route path="/add-contact" exact component={AddContact} />
            </Switch>
       </Router>
       </>
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
