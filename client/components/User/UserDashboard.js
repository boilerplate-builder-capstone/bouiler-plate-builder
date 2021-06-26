import React, { useState, useEffect } from 'react';
import CardCarousel from './CardCarousel';
import IconButton from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import { connect } from 'react-redux';
import UserEdit from './UserEdit';
import { getRepos } from '../../reduxStore/user/userActions'
import {getTemplates} from '../../reduxStore/template/templateActions'
import axios from 'axios';
import { Link } from 'react-router-dom';

import {generateBoilerplate} from '../../utils';

function UserDashboard(props) {
  const [edit, setEdit] = useState(false);
  const [image, setImage] = useState('');

  useEffect(async () => {
    try {
      if (props.user.user.github) {
        props.repos(props.user.user.github.repos_url);
        setImage(props.user.user.github.avatar_url);
      } else {
        setImage(props.user.user.icon);
      }
      props.getTemplates();
    } catch (er) {
      console.log(er);
    }
  }, []);
  const handleClick = () => {
    if (edit) {
      setEdit(false);
    } else {
      setEdit(true);
    }
  };

  //User Template

  console.log(props)
  //^^^^^^^^^^^^^

  return (
    <div>
      <div id="dashboardcontainer">
        <div id="imageeditcont">
          <img className="userimage" src={image} />
          {edit ? (
            <UserEdit editChange={handleClick} />
          ) : (
            <>
              <h3>{props.user.user.username}</h3>
              <IconButton
                className="editButton"
                style={{ marginTop: 50 }}
                onClick={handleClick}
              >
                <p>Edit Username</p>
                <EditIcon />
              </IconButton>
            </>
          )}
        </div>
        <div id="gittempinfo">
        {props.user.repos ? <CardCarousel items={props.user.repos} /> : <div className = "noRepos">Sign in with Github to see your Repos!</div> }
          <div id="boilerList">
            <h1>Recent Created Boiler Plates</h1>
            {/* User Template */}
            {
            props.template.filter(
              (elm) => elm.userId === props.user.user.id
              ).map((elm) => {
              return(
                <ul key={elm.id}>
                  <li>
                    <button onClick={() => {generateBoilerplate(elm.templateJSON)}}>
                    <h2>{elm.name}</h2>
                    </button>
                  </li>
                </ul>
              )
            })
            }
            {/* ^^^^^^^^^^^^^^^^^ */}
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    template: state.template
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTemplates: () => dispatch(getTemplates()),
    repos: (repoURL) => dispatch(getRepos(repoURL)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UserDashboard);
