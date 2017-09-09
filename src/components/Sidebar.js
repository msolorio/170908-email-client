import React from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar(props) {
  return (
    <div className="Sidebar">
      <ul>
        <li><Link to="/inbox">Inbox</Link></li>
        <li><Link to="/spam">Spam</Link></li>
      </ul>
    </div>
  );
}
