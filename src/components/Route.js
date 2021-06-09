const Route = ({ path, children }) => {
   //destructured from props
   return window.location.pathname === path ? children : null;
};

export default Route;


//if no JSX, no need to import React