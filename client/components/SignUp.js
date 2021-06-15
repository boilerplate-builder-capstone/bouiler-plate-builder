import React, { useState } from 'react';

function SignUp() {
  const [userForm, setUserForm] = useForm();

  return (
    <div>
      <form>
        <input type="text" name="username" placeholder="username" />
        <input type="password" name="password" placeholder="password" />
        <input type="submit" />
      </form>
    </div>
  );
}

export default SignUp;
