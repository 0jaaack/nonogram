import React from "react";
import { Navigate } from "react-router";

function withNavigate(Component) {
  return class extends React.Component {
    constructor(props) {
      super(props);
    }

    state = { path: null };

    render() {
      if (!!this.state.path) {
        return (
          <Navigate to={this.state.path} />
        );
      }

      return (
        <Component
          {...this.props}
          navigate={(path) => this.setState({ path })}
        >
          {this.props.children}
        </Component>
      );
    }
  };
}

export default withNavigate;
