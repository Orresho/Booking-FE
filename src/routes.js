import IndexContainer from './Pages/IndexContainer';
import NotExistPage from './Pages/404Page';
import AboutUsContainer from './Pages/AboutUsContainer';
import OurVisionContainer from './Pages/OurVisionContainer';
import ServicesContainer from './Pages/ServicesContainer';
import DocumentationContainer from './Pages/DocumentationContainer';
import SignInContainer from './Pages/SignInContainer';
import SignUpContainer from './Pages/SignUpContainer';

// Higher order components
import withAuthorization from "./HOC/withAuthorization";


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
    path: '/our-vision',
    exact: true,
    component: OurVisionContainer,
  },
  {
    path: '/about-us',
    exact: true,
    component: AboutUsContainer,
  },
  {
    path: '/services',
    exact: true,
    component: ServicesContainer,
  },
  {
    path: '/documentation',
    exact: true,
    component: DocumentationContainer,
  },
  {
    path: '/sign-in',
    exact: true,
    component: withAuthorization(SignInContainer),
  },
  {
    path: '/sign-up',
    exact: true,
    component: withAuthorization(SignUpContainer),
  },
  {
    //404 page
    component: NotExistPage,
  }
];