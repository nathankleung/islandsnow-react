'use client';

import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import './style.css';
import { Container } from "react-bootstrap";
import React from 'react';


const TopMenu = () => (
  <div className="navbar navbar-expand-lg navbar-light bg-light">
    <Container>
      <ul className="nav">
        <i className="bi bi-facebook p-1" style = {{ fontSize: '1rem'}}></i>
        <i className="bi bi-twitter p-1" style = {{ fontSize: '1rem'}}></i>
        <i className="bi bi-pinterest p-1" style = {{ fontSize: '1rem'}}></i>
        <i className="bi bi-instagram p-1" style = {{ fontSize: '1rem'}}></i>
      </ul>
      <ul className="nav justify-content-end">
        <i className="bi bi-house-fill p-1" style = {{ fontSize: '1rem'}}></i>
        <i className="bi bi-search p-1" style = {{ fontSize: '1rem'}}></i>
        <i className="bi bi-person-fill p-1" style = {{ fontSize: '1rem'}}></i>

        <a
              className="nav-link dropdown-toggle p-1 d-inline-flex align-items-center"
              href="#"
              id="cartDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ fontSize: '1rem', color: 'black',}}
        >          
          <i className="bi bi-cart" style = {{ fontSize: '1rem', color: 'black'}}> </i>
        </a>
        <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="cartDropdown">
          <li><a className="dropdown-item" href="#">Item1</a></li>
          <li><a className="dropdown-item" href="#">Item2</a></li>
          <li><a className="dropdown-item" href="#">Item3</a></li>

        </ul>
      </ul>
    </Container>
  </div>
);

const IslandSnowLogo = () => (
  <div className="row"> 
    <div className="col">
      <img 
        className="img-fluid rounded mx-auto d-block py-1" 
        src="experience-islandsnow-bootstrap-logo.png">
      </img>
    </div>
  </div>
);

const MiddleMenu = () => (
  <div className="row justify-content-center pt-3">
    <div className="col-auto">   
      <div className="dropdown">
        <div className="dropdown-toggle">
          <strong>MEN</strong>
        </div>
      </div>
    </div>
    <div className="col-auto">   
      <div className="dropdown">
        <div className="dropdown-toggle">
          <strong>WOMEN</strong>
        </div>
      </div>
    </div>
    <div className="col-auto">   
      <div className="dropdown">
        <div className="dropdown-toggle">
          <strong>KIDS</strong>
        </div>
      </div>
    </div>
    <div className="col-auto">   
      <div className="dropdown">
        <div className="dropdown-toggle">
          <strong>BRANDS</strong>
        </div>
      </div>
    </div>
    <div className="col-auto">   
            <strong>SEARCH</strong>
    </div>
  </div>
);

const FullWidthImage = () => (
  <div className="row nav-justify-content-center">
    <img 
      src="experience-islandsnow-bootstrap-main.png" 
      className="img-fluid">
    </img>
  </div>
);

const FooterMenu = () => (
  <footer className="bg-dark" style={{backgroundColor: '#292929', color: 'white',}}>
    <div className="container py-3">
        <div className="row content-justify-center">
            <div className="col-auto">
                <p>NAVIGATION</p>
                <hr></hr>
                <ul className="list-unstyled">
                    <li>About us</li>
                    <li>Employment</li>
                    <li>Videos</li>
                </ul>
            </div>
            <div className="col-auto">
                <p>MAIN MENU</p>
                <hr></hr>
                <ul className="list-unstyled">
                    <li>Men</li>
                    <li>Women</li>
                    <li>Kids</li>
                </ul>
            </div>
            <div className="col-auto">
                <p>CONNECT</p>
                <hr></hr>
                <ul className="list-unstyled">
                    <li>Sign up for the latest updates</li>
                    <li>
                        <input 
                          type="text" 
                          placeholder="Enter email address"
                        />
                        <button className="btn btn-dark" type="submit">Join</button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</footer>
);

export default function Home() {
  return (
    <main>
      <Container fluid>
        <TopMenu/>
        <IslandSnowLogo/>
        <MiddleMenu/>
        <FullWidthImage/>
        <FooterMenu/>
      </Container>
    </main>
  );
}