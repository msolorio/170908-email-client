import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export function EmailList(props) {

  const list = props.emailList.map((email, index) => {
    return (
      <li className="email" key={index}>
          <div className="emailTitle">
            <Link to={`/${props.folder}/${email.id}`}>
              Title: {email.title}
            </Link>
          </div>
          <div className="emailFrom">From: {email.from}</div>
      </li>
    );
  });

  return (
    <ul className="EmailList">
      <h2 className="folderName">{props.folderName}</h2>
      {list}
    </ul>
  );
}

const mapStateToProps = (state, props) => {
  const folder = props.match.params.folder;
  const folderName = state[folder].name;
  const emailList = Object.keys(state[folder].emails).map((emailId) => {
    return state[folder].emails[emailId];
  });

  return {
    folder,
    folderName,
    emailList
  }
}

export default connect(mapStateToProps)(EmailList);
