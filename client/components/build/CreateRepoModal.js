import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import axios from 'axios';

function CreateRepoModal() {
  const [toggle, setToggle] = useState(false);
  const [isToken, setIsToken] = useState(true);
  const { register, handleSubmit } = useForm();

  const gitToken = window.localStorage.getItem('tokenGit');
  gitToken ? setIsToken(true) : '';

  const onSubmit = async (data) => {
    try {
      const { repoTitle } = data;
      const gitToken = window.localStorage.getItem('tokenGit');
      const dataPack = { repoTitle, gitToken };
      const response = await axios.post('/api/gitCreate', dataPack);
      response && setToggle(true);
    } catch (error) {
      console.log('error occured in repo generation', error);
    }
  };

  return (
    <div>
      {!toggle ? (
        <div id="repoGen">
          <h2>Would you like to create a new repo for this project?</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register('repoTitle')}
              placeholder="Name Your Repo Here"
            />
            <input type="submit" />
          </form>
        </div>
      ) : (
        <h2>Repo Created!!!</h2>
      )}
    </div>
  );
}

export default CreateRepoModal;
