import React from 'react';
import pizzas from '../pizzas.json';
import { Button } from 'reactstrap';

function Cards() {
  return (
    <>
      {pizzas.map(pizza => (
        <div className='col-md-6' key={pizza.id}>
          <div className='card flex-md-row mb-4 shadow-sm'>
            <div className='card-body d-flex flex-column align-items-start'>
              <h3 className='mb-0 card-heading'>
                <a
                  style={{
                    color: '#' + (((1 << 24) * Math.random()) | 0).toString(16)
                  }}
                  href='/'
                >
                  {pizza.title}
                </a>
              </h3>
              <strong className='d-inline-block mb-2 mt-1'>
                {pizza.price}
              </strong>
              <p className='card-text mb-auto'>{pizza.about}</p>
              <Button color='primary shadow-sm' className='mt-2 mb-1'>
                Shop Now
              </Button>
            </div>
            <img
              src={pizza.img}
              type='image/webp'
              alt='Thumbnail [200x250]'
              className='card-img-right flex-auto d-none d-lg-block'
            />
          </div>
        </div>
      ))}
    </>
  );
}

export default Cards;
