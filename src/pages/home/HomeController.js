// @flow
import React from "react";
import HomeView from "./HomeView";

class HomeController extends React.Component {
  static propTypes = {};

  render() {
    return <HomeView {...this.props} />;
  }
}

export default HomeController;
