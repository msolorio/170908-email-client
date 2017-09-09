import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import EmailList from './EmailList';
import SingleEmail from './SingleEmail';


export default function Email() {
  return (
    <Router>
      <div className="Email">
        <Sidebar/>
        <main>
          <Route path="/:folder" component={EmailList}/>
          <Route path="/:folder/:emailId" component={SingleEmail}/>
        </main>
      </div>
    </Router>
  );
}
