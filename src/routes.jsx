import { Routes as Switch, Route } from 'react-router-dom';
import { Event, Home } from './components';

// list of routes retrieved from api
const routes = ['/football', '/netball', '/rugby', '/table-tennis'];

const Routes = () => {
  return (
    <Switch>
      <Route path='/' element={<Home />} />
      {routes.map(route => (
        <Route path={route} element={<Event />} key={route} />
      ))}
    </Switch>
  );
};

export default Routes;
