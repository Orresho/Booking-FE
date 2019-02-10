import IndexContainer from './Pages/IndexContainer';
import NotExistPage from './Pages/404Page';
import EventManagementContainer from './Pages/EventManagementContainer';
import UserManagementContainer from './Pages/UserManagementContainer';
import BookingManagementContainer from './Pages/BookingManagementContainer';
import SignInContainer from './Pages/SignInContainer';

// Higher order components
import withAuthorization from "./HOC/withAuthorization";
import EventContainer from './Pages/EventContainer';

/**
 * Array of site wide routes imported and uset at App.js file.
 */
export default [
  {
    path: '/',
    exact: true,
    component: IndexContainer,
  }, 
  {
    path: '/event-management',
    exact: true,
    component: EventManagementContainer,
  },
  {
    path: '/user-management',
    exact: true,
    component: UserManagementContainer,
  },
  {
    path: '/booking-management',
    exact: true,
    component: BookingManagementContainer,
  },
  {
    path: '/sign-in',
    exact: true,
    component: withAuthorization(SignInContainer),
  },
  {
    path: '/create-event',
    exact: true,
    component: EventContainer,
  },
  {
    //404 page
    component: NotExistPage,
  }
];