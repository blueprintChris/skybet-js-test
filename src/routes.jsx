import { Routes as Switch, Route } from 'react-router-dom';
import { Error, Event, EventDetails, Home } from './components';

// list of routes retrieved from api
const routes = ['/football'];

const Routes = () => {
  return (
    <Switch>
      <Route path='/' element={<Home />} />
      {routes.map(route => (
        <Route path='/:eventName' element={<Event />} key={route} />
      ))}
      <Route path='/:eventName/event/:id' element={<EventDetails />} />
      <Route path='/error' element={<Error />} />
    </Switch>
  );
};

export default Routes;
