import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import axios from 'axios';
import {
  Container,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  CustomInput
} from 'reactstrap';

const formSchema = yup.object().shape({
  name: yup
    .string()
    .required('Name is a required field')
    .min(2, 'Name is too short - should be 2 chars minimum'),
  size: yup.string(),
  text: yup.string(),
  toppings1: yup.boolean(),
  toppings2: yup.boolean(),
  toppings3: yup.boolean(),
  toppings4: yup.boolean(),
  toppings5: yup.boolean()
});

function PizzaForm() {
  const [formState, setFormState] = useState({
    name: '',
    size: '8 inches',
    text: '',
    toppings1: false,
    toppings2: false,
    toppings3: false,
    toppings4: false,
    toppings5: false
  });

  const [errorState, setErrorState] = useState({
    name: '',
    size: '8 inches',
    text: ''
  });

  const [buttonDisabled, setButtonDisabled] = useState(true);

  useEffect(() => {
    formSchema.isValid(formState).then(valid => {
      setButtonDisabled(!valid);
    });
  }, [formState]);

  const validate = e => {
    yup
      .reach(formSchema, e.target.name)
      .validate(e.target.value)
      .then(valid => {
        setErrorState({
          ...errorState,
          [e.target.name]: ''
        });
      })
      .catch(err => {
        setErrorState({
          ...errorState,
          [e.target.name]: err.errors[0]
        });
      });
  };

  const changeHandler = e => {
    e.persist();
    validate(e);
    const value =
      e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormState({ ...formState, [e.target.name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post('https://reqres.in/api/users', formState)
      .then(res => console.log(res))
      .catch(console.log);
    setFormState({
      name: '',
      size: '',
      text: '',
      toppings1: false,
      toppings2: false,
      toppings3: false,
      toppings4: false,
      toppings5: false
    });
  };

  return (
    <Container>
      <div className='pt-5 pb-3 text-center'>
        <h1 className='text-primary create-pizza'>Create Your Own Pizza!</h1>
      </div>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for='name'>Name</Label>
          <Input
            type='text'
            name='name'
            id='name'
            placeholder='Name'
            value={formState.name}
            onChange={changeHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for='size'>Select Size</Label>
          <Input
            type='select'
            name='size'
            id='size'
            value={formState.size}
            onChange={changeHandler}
          >
            <option>8 inches</option>
            <option>12 inches</option>
            <option>14 inches</option>
            <option>18 inches</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for='text'>Special Instructions</Label>
          <Input
            type='textarea'
            name='text'
            id='text'
            value={formState.text}
            onChange={changeHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label>
            Toppings
            <div>
              <CustomInput
                type='checkbox'
                id='toppings1'
                name='toppings1'
                label='Pepperoni'
                checked={formState.toppings1}
                onChange={changeHandler}
              />
              <CustomInput
                type='checkbox'
                id='toppings2'
                name='toppings2'
                label='Mushrooms'
                checked={formState.toppings2}
                onChange={changeHandler}
              />
              <CustomInput
                type='checkbox'
                id='toppings3'
                name='toppings3'
                label='Sausage'
                checked={formState.toppings3}
                onChange={changeHandler}
              />
              <CustomInput
                type='checkbox'
                id='toppings4'
                name='toppings4'
                label='Extra cheese'
                checked={formState.toppings4}
                onChange={changeHandler}
              />
              <CustomInput
                type='checkbox'
                id='toppings5'
                name='toppings5'
                label='Green peppers'
                checked={formState.toppings5}
                onChange={changeHandler}
              />
            </div>
          </Label>
        </FormGroup>
        <Button disabled={buttonDisabled} color='primary' className='shadow'>
          Place Order
        </Button>
      </Form>
    </Container>
  );
}

export default PizzaForm;
