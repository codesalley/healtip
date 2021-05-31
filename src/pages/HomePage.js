/* eslint-disable no-unused-expressions */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import {
  Switch, Route, useLocation, useHistory,
} from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import Appointments from '../components/Appointments';
import SideBar from '../components/SideBar';
import Favourite from '../components/Favorites';
import Profile from '../components/Profile';

const HomePage = ({ profile }) => {
  const location = useLocation();
  const history = useHistory();
  const [showSidebar, setSidebar] = useState(true);

  useEffect(() => {
    location.pathname === '/' ? history.push('/dashboard') : null;
  });

  console.log(profile);
  const routes = [
    {
      name: 'Home',
      path: '/dashboard',
      component: Dashboard,
    },
    {
      name: 'Appointments',
      path: '/appointments',
      component: Appointments,
    },
    {
      name: 'Favorites',
      path: '/fav',
      component: Favourite,
    },
    {
      name: 'Profile',
      path: '/profile',
      component: Profile,
    },
  ];
  return (
    <div className="overflow-hidden flex main-bg ">
      <SideBar toggle={showSidebar} />
      <div className="py-5 px-2 w-full">
        <div className="flex flex-row justify-between w-full ">
          <button className="sm:hidden" onClick={() => setSidebar((e) => !e)} type="button"> X </button>
          <h3 className="text-gray-500 hidden sm:block text-xs sm:text-xl">
            Welcome
            {' '}
            <p className="font-bold text-gray-500 italic inline-block">{profile.full_name}</p>
          </h3>

          <h3 className="text-gray-500 block font-semibold text-xs sm:text-xl"> All Doctors </h3>
        </div>
        <div>

          <Switch>
            {routes.map((route, index) => <Route key={index.toString()} path={route.path} component={route.component} />)}
          </Switch>

        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps)(HomePage);
