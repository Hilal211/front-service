import React, { useContext } from 'react';
import SessionContext from './Session/SessionContext';
import { Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './User/NavBar/NavBar';
import HomePage from './User/HomePage/HomePage';
import Footer from './User/Footer/Footer';
import PostsPage from './User/PostsPage/PostsPage';
import BlogDetails from './User/BlogDetails/BlogDetails';
import OfferPage from './ServiceProvider/OfferPage/OfferPage';
import AddOffer from './ServiceProvider/AddOffer/AddOffer';
import ServiceProviderPage from './User/ServiceProviderPage/ServiceProviderPage';
import UserDetails from './User/UserDetails/UserDetails';
import Contact from './User/Contact/Contact';
import EditOffer from './ServiceProvider/EditOffer/EditOffer';
import Rating from './User/Rating/Rating';
import ProfileSp from './ServiceProvider/ProfileSp/ProfileSp';
import SideNav from './component/SideNav/SideNav';
import Login from './Login/Login';
import Register from './Register/Register';

export default function Routes() {

    return (
        <Switch>
            
            
            <Route exact path="/home"  component={HomePage} />
            <Route exact path="/offers"  component={PostsPage} />
            <Route exact path="/myoffer"  component={OfferPage} />
            <Route exact path="/offerdetail/:id"  component={BlogDetails} />
            <Route exact path="/addoffer"  component={AddOffer} />
            <Route exact path="/editoffer/:id"  component={EditOffer} />
            <Route exact path="/serviceprovider"  component={ServiceProviderPage} />
            <Route exact path="/serviceproviderdetails/:id"  component={UserDetails} />
            <Route exact path="/contact"  component={Contact} />
            <Route exact path="/rating/:id"  component={Rating} />
            <Route exact path="/profile"  component={ProfileSp} />
            <Route exact path="/dashboard"  component={SideNav} />
            <Route exact path="/login"  component={Login} />
            <Route exact path="/register"  component={Register} />

        </Switch>
    );
}
