import { withRouter } from 'react-router-dom';
import SessionProvider from './Session/SessionProvider';
import Routes from './Router';
import Navbar from './User/NavBar/NavBar';
import Footer from './User/Footer/Footer';
function App() {
    return (
      <div className="app">
        <SessionProvider>
          <Navbar/>
          <Routes />
          <Footer/>
        </SessionProvider>
      </div>)
  


}

export default withRouter(App);