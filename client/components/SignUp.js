import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

function SignUp() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    reset({});
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('userName')} placeholder="username" />
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
