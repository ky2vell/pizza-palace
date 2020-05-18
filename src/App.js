import React from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Cards from './components/Cards';
import Footer from './components/Footer';
import PizzaForm from './components/PizzaForm';
import { Container, Row } from 'reactstrap';
import './App.css';

const App = () => {
  return (
    <>
      <Header />
      <Route exact path='/'>
        <Home />
        <Container>
          <Row className='mb-2'>
            <Cards />
          </Row>
        </Container>
      </Route>
      <Route exact path='/pizza'>
        <PizzaForm />
      </Route>
      <Footer />
    </>
  );
};
export default App;
