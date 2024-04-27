import React from 'react'
import {Navigate} from 'react-router-dom';

const PrivateRoute = ({isLoggedIn, children}) => {
  // apde already login chiye to dashboard{CHILDEREN} dekhadi dejo
  if(isLoggedIn) {
    return children;
  }
  else {
    // jo login na hoy to pahela login karavishu
    return <Navigate to="/login"/>
  }
}

export default PrivateRoute
