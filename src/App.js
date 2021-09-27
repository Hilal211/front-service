import { withRouter } from 'react-router-dom';
import SessionProvider from './Session/SessionProvider';
import Routes from './Router';
import Navbar from './User/NavBar/NavBar';
import Footer from './User/Footer/Footer';
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react';

function App() {
  const location = useLocation();
  const [bool, setBool] = useState(true);
 let loc=location.pathname;

  useEffect(() => {
    if(location.pathname == '/login') {
      setBool(false)
    }
    else{
      setBool(true)
    }
  }, [loc])

  return (
    <div className="app">
      <SessionProvider>
        {bool ? <Navbar /> : null}
        <Routes />
        {bool ? <Footer /> : null}
      </SessionProvider>
    </div>)



}

export default withRouter(App);