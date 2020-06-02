import React from "react";
import { Redirect, useLocation } from "react-router-dom";

const RedirectAs404 = () => {
  const location = useLocation();

  return (
    <Redirect to={Object.assign({}, location, { state: { is404: true } })} />
  );
};

export default RedirectAs404;
