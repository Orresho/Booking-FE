import SchoolPaperContainer from './Pages/SchoolPaperContainer';
import TestContainer from './Pages/TestContainer';
import NotExistPage from './Pages/404Page';

/**
 * Array of site wide routes imported and uset at App.js file.
 */
export default [
  {
    path: '/',
    exact: true,
    component: TestContainer,
  }, 
  {
    path: '/school',
    exact: true,
    component: SchoolPaperContainer,
  },
  {
    //404 page
    component: NotExistPage,
  }
];