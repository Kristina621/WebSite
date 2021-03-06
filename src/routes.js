import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './pages/main'
import Apout from './pages/about'
import Download from './pages/download'
import Feedback from './pages/feedback'
import News from './pages/news'

function Routes() {
  return (
    <div>
      <Route exact path="/" component={Main} />
      <Route exact path="/about" component={Apout} />
      <Route exact path="/download" component={Download} />
      <Route exact path="/feedback" component={Feedback} />
      <Route exact path="/news" component={News} />
    </div>
  );
}

export default Routes;

