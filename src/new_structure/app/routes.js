// React
import React from 'react';
import { Route, IndexRoute, browserHistory } from 'react-router';

// Custom
import App from './components/app';
import PageNotFound from './pages/page_not_found';
import QuestionsContainer from '../questions/containers/questions_container';
import Resources from '../resources/pages/resources';


export default (
  <Route path="/" component={App} history={browserHistory} >
    <IndexRoute component={QuestionsContainer} />
    <Route path="resources" component={Resources} />
    <Route path="*" component={PageNotFound} />
  </Route>
);
