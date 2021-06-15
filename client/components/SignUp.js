import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Redirect } from 'react-router-dom';

function SignUp(props) {
  const [toHome, setToHome] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  const { create } = props;

  const onSubmit = (data) => {
    const userData = JSON.stringify(data);
    const userForm = JSON.parse(userData);
    create(userForm);
    reset({});
    // setTimeout(() => setToHome(true), 2000);
    setToHome(true);
  };

  return (
    <div>
      {toHome ? <Redirect to="/" /> : null}
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('username')} placeholder="username" />
        <input
          {...register('password')}
          type="password"
          placeholder="password"
        />
        <input type="submit" />
      </form>
    </div>
  );
}

export default SignUp;
