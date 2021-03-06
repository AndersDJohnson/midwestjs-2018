import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const Public = ({ loggingIn, authenticated, component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      !authenticated ?
      (React.createElement(component, { ...props, loggingIn, authenticated, ...rest })) :
      (<Redirect to="/documents" />)
    )}
  />
);

Public.propTypes = {
  loggingIn: PropTypes.bool.isRequired,
  authenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};

export default Public;
