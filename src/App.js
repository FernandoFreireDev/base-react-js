import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import '@/styles/global.css';
import Login from '@/pages/Auth/Login';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
