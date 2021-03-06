/* eslint-disable react/jsx-props-no-spreading */
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getUser } from './storageHelper';

const SecuredRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (getUser() ? <Component {...props} /> : <Redirect to="/login" />)}
  />
);

SecuredRoute.propTypes = {
  component: PropTypes.shape({}).isRequired,
};

export default SecuredRoute;
