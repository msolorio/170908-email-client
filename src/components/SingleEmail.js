import React from 'react';
import { connect } from 'react-redux';

export function SingleEmail(props) {
  return (
    <div className="SingleEmail">
      <h3 className="emailTitle">{props.email.title}</h3>
      <p className="emailFrom">From: {props.email.from}</p>
      <p className="emailContent">{props.email.content}</p>
    </div>
  );
}

const mapStateToProps = (state, props) => {

  const folder = props.match.params.folder;
  const emailId = props.match.params.emailId;
  const email = state[folder].emails[emailId];
  return {
    email
  };
}

export default connect(mapStateToProps)(SingleEmail);
