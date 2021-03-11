import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import '@/styles/global.css';

import Login from '@/pages/Auth/Login';
import Users from '@/pages/App/Users';
import NotFound from '@/pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/users" component={Users} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
