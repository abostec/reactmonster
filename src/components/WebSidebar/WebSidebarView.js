// @flow
import { css } from "aphrodite";
import "./WebSidebarStyles.scss"
import React from "react";
import { Link } from "react-router-dom";

export default function WebSidebarView(props) {
  
  return (
    <div className="sidebar-component">
      <div className="side-bar-main">
      <Link className="side-bar-link" to=""><i></i>Profile</Link>
      <Link className="side-bar-link" to="">Notification</Link>
      <Link className="side-bar-link" to="">Team members</Link>
      <Link className="side-bar-link" to="">Documents</Link>
      <Link className="side-bar-link" to="">Invoices</Link>
      <Link className="side-bar-link" to="">Earnings</Link>
      <Link className="side-bar-link" to="">Get Paid</Link>
      </div>
      <div className="output-container">
      {props.children}
      </div>
      
    </div>
  );
}
