import IndexContainer from './Pages/IndexContainer';
import NotExistPage from './Pages/404Page';
import OurVisionContainer from './Pages/OurVisionContainer';
import ServicesContainer from './Pages/ServicesContainer';
import DocumentationContainer from './Pages/DocumentationContainer';
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
    component: OurVisionContainer,
  },
  {
    path: '/user-management',
    exact: true,
    component: ServicesContainer,
  },
  {
    path: '/booking-management',
    exact: true,
    component: DocumentationContainer,
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