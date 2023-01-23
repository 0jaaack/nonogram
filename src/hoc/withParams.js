import React from "react";
import { useParams } from "react-router";

function withParams(Component) {
  return (props) => (
    <Component
      {...props}
      params={useParams()}
    />
  );
}

export default withParams;
