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
import BookForm from '../components/BookForm';

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
    {
      name: 'Book Apt',
      path: '/book/:id',
      component: BookForm,
    },
  ];
  return (
    <div className="overflow-hidden flex main-bg ">
      <SideBar toggle={showSidebar} />
      <div className="py-5 px-2 w-full h-screen ">
        <div className="flex flex-row justify-between w-full pb-1">
          <button className="sm:hidden " onClick={() => setSidebar((e) => !e)} type="button">
            {' '}
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-grid w-8 text-gray-500" viewBox="0 0 16 16">
              <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z" />
            </svg>
            {' '}

          </button>
          <h3 className="text-gray-500 hidden sm:block text-xs sm:text-xl">
            Welcome
            {' '}
            <p className="font-bold text-gray-500 italic inline-block">{profile.full_name}</p>
          </h3>

          <h3 className="text-gray-500 flex items-center font-semibold text-xs sm:text-xl"> All Doctors </h3>
        </div>
        <div className="h-full overflow-scroll lg:py-5 py-3">
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
