import React from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Container, Button } from 'reactstrap';

function Home() {
  return (
    <div>
      <Jumbotron fluid className='d-flex align-items-center'>
        <Container fluid className='text-center'>
          <h1 className='display-3 text-white mb-2'>pizza while coding</h1>
          <Button
            tag={Link}
            to='/pizza'
            color='warning'
            className='mb-4 shadow'
          >
            Get Pizza Now!
          </Button>
        </Container>
      </Jumbotron>
    </div>
  );
}

export default Home;
