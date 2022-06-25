import React, { Component } from "react";
import { withRouter } from "react-router";
class Header123 extends Component {
  render() {
    console.log("withRouter", this.props);
    return (
      <div className="row">
        <div className="col-xs-offset-2 col-xs-8">
          <div className="page-header">
            <h2>React Router Demo</h2>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(Header123);
