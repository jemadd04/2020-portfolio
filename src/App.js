import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';

class App extends React.Component {
  state = {
    title: 'James Maddox',
    headerLinks: [
      { title: 'Home', path: '/' },
      { title: 'About', path: '/about' },
      { title: 'Contact', path: '/contact' },
    ],
    home: {
      title: 'James Maddox',
      subTitle: 'Front End Developer',
      text: 'Check out my projects below',
    },
    about: {
      title: 'About Me',
    },
    contact: {
      title: 'Contact Me',
    },
  };

  render() {
    return (
      <Router>
        <Container className='p-0' fluid={true}>
          <Navbar className='border-bottom' bg='transparent' expand='lg'>
            <Navbar.Brand>James Maddox</Navbar.Brand>
            <Navbar.Toggle className='border-0' aria-controls='navbar-toggle' />
            <Navbar.Collapse id='navbar-toggle'>
              <Nav className='ml-auto'>
                <Link className='nav-link' to='/'>
                  Home
                </Link>
                <Link className='nav-link' to='/about'>
                  About
                </Link>
                <Link className='nav-link' to='/contact'>
                  Contact
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route
            path='/'
            exact
            render={() => (
              <HomePage
                title={this.state.home.title}
                subTitle={this.state.home.subtitle}
                text={this.state.home.text}
              />
            )}
          />
          <Route
            path='/'
            exact
            render={() => ()}
          />
          <Route
            path='/'
            exact
            render={() => ()}
          />
          <Footer />
        </Container>
      </Router>
    );
  }
}

export default App;
