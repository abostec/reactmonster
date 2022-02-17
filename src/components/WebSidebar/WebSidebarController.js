// @flow
import React from "react";

import WebSidebarView from "./WebSidebarView";

export default class WebSidebarController extends React.Component {
 
  render() {
    return (
      <WebSidebarView {...this.props} />
    );
  }
}
