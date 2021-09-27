import './NavBar.css'
import logo from '../../image/logo.png'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
export default function Navbar(){
    const go = () => {
        const select = (el, all = false) => {
            el = el.trim()
            if (all) {
              return [...document.querySelectorAll(el)]
            } else {
              return document.querySelector(el)
            }
          }

          const on = (type, el, listener, all = false) => {
            if (all) {
              select(el, all).forEach(e => e.addEventListener(type, listener))
            } else {
              select(el, all).addEventListener(type, listener)
            }
          }

          const onscroll = (el, listener) => {
            el.addEventListener('scroll', listener)
          }
        let selectHeader = select('#header')
        if (selectHeader) {
          const headerScrolled = () => {
            if (window.scrollY > 20) {
              selectHeader.classList.add('header-scrolled')
            } else {
              selectHeader.classList.remove('header-scrolled')
            }
          }
          window.addEventListener('load', headerScrolled)
          onscroll(document, headerScrolled)
        }


        let backtotop = select('.back-to-top')
        if (backtotop) {
          const toggleBacktotop = () => {
            if (window.scrollY > 100) {
              backtotop.classList.add('active')
            } else {
              backtotop.classList.remove('active')
            }
          }
          window.addEventListener('load', toggleBacktotop)
          onscroll(document, toggleBacktotop)
        }


        on('click', '.mobile-nav-toggle', function(e) {
            select('#navbar').classList.toggle('navbar-mobile')
            this.classList.toggle('bi-list')
            this.classList.toggle('bi-x')
          })

          
          on('click', '.navbar .dropdown > a', function(e) {
            if (select('#navbar').classList.contains('navbar-mobile')) {
              e.preventDefault()
              this.nextElementSibling.classList.toggle('dropdown-active')
            }
          }, true)
    }


    useEffect(() => {
       
        go();
      }, []);
    return(

  <header id="header" class="header fixed-top">
    <div class="container-fluid container-xl d-flex align-items-center justify-content-between">

      <a href="index.html" class="logo d-flex align-items-center">
        <img src={logo} alt=""/>
        <span>Services</span>
      </a>

      <nav id="navbar" class="navbar">
        <ul>
          <li><Link class="nav-link scrollto active" to="/home">Home</Link></li>
          <li><a class="nav-link scrollto" href="#about">About</a></li>
          <li><Link class="nav-link scrollto" to="/offers">Offer</Link></li>
          <li><Link class="nav-link scrollto" to="/serviceprovider">Service Provider</Link></li>
          {/* <li><a class="nav-link scrollto" href="#team">Team</a></li> */}
          {/* <li><a href="blog.html">Blog</a></li> */}

          {/* <li class="dropdown"><a href="#"><span>Location</span> <i class="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="#">Drop Down 1</a></li>
             
              <li><a href="#">Drop Down 2</a></li>
            
            </ul>
          </li> */}


          <li class="dropdown"><a href="#"><span>Account</span> <i class="bi bi-chevron-down"></i></a>
            <ul>
              <li><Link to="/myoffer">My Offer</Link></li>
              {/* <li class="dropdown"><a href="#"><span>Deep Drop Down</span> <i class="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="#">Deep Drop Down 1</a></li>
                  <li><a href="#">Deep Drop Down 2</a></li>
                  <li><a href="#">Deep Drop Down 3</a></li>
                  <li><a href="#">Deep Drop Down 4</a></li>
                  <li><a href="#">Deep Drop Down 5</a></li>
                </ul>
              </li> */}
              <li><Link to="/profile">Profile</Link></li>
              {/* <li><a href="#">Drop Down 3</a></li> */}
              {/* <li><a href="#">Drop Down 4</a></li> */}
            </ul>
          </li>
          <li><Link class="nav-link scrollto" to="/contact">Contact</Link></li>
          <li><a class="getstarted scrollto" href="#about">LogOut</a></li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>

    </div>
  </header>
    );
}