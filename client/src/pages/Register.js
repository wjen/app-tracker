import React from 'react';

import { useState, useEffect } from 'react';
import { Logo, FormRow, Alert } from '../components';
import Wrapper from '../assets/wrappers/RegisterPageWrapper';

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: false,
  showAlert: false,
};

const Register = () => {
  const [values, setValues] = useState(initialState);
  // global state and useNavigate

  const handleChange = (e) => {
    console.log(e.target);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };
  return (
    <Wrapper className="full-page">
      <form onSubmit={onSubmit} className="form">
        <Logo />
        <h3>{values.isMember ? 'Login' : 'Register'}</h3>
        {values.showAlert && <Alert />}
        {/* Name input */}
        {values.isMember && (
          <FormRow
            value={values.name}
            name="name"
            type="text"
            handleChange={handleChange}
          />
        )}
        {/* Email input */}
        <FormRow
          value={values.email}
          name="email"
          type="email"
          handleChange={handleChange}
        />
        {/* Password input */}
        <FormRow
          value={values.password}
          name="password"
          type="password"
          handleChange={handleChange}
        />
        <button type="submit" className="btn btn-block">
          submit
        </button>
        <p>
          {' '}
          {values.isMember ? 'Not a member yet' : 'Already a member?'}
          <button type="button" onClick={toggleMember} className="member-btn">
            {values.isMember ? 'Login' : 'Register'}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
