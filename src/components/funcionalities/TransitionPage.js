import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './transitionPage.css'; 

const TransitionPage = ({ children, location }) => (
  <CSSTransition
    key={location.key}
    classNames="fade"
    timeout={300}
  >
    {children}
  </CSSTransition>
);

export default TransitionPage;
