import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { createTemplate } from '../../reduxStore/template/templateActions';
import { Link } from 'react-router-dom';
import {randomName} from '../../../public/utility/randomName'

const CreateTemplate = (props) => {


  let user = {userName: 'Fred', loggedIn: true}


      //CREATE USER'S TEMPLATE-----------------------
      const [inputValues, setInputValue] = useState({
          id: props.templateId,
          templateJSON: '',
          name: '',
          userId: user.id
      })

      // const [name, setName] = useState('')

      // const {template} = props;
      const initialRender = useRef(true)
      useEffect(() => {
          if (initialRender.current) {
          initialRender.current = false
          } else {
          setInputValue({
              id: props.templateId,
              name: template.name,
              templateJSON: template.templateJSON,
          });
          }
      }, [props])
      //^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

  const randomNam = randomName();

  return (
    <div id='createTemplate'>
      <label>Name Your Boilerplate</label>
      <input
        name='name'
        value={inputValues.name}
        onChange = {(e) => {
          setInputValue({ ...inputValues, name: e.target.value });
        }}
      />
        <button
          onClick={() => {
            props.createTemplate(inputValues);
          }}
        >
          Next
          </button>
      </div>
  )
}

const mapStateToProps = ({template, user}) => {
  return {template: template, user: user};
}

const mapDispatchToProps = (dispatch) => {
  return {createTemplate: (template) => dispatch(createTemplate(template))}
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateTemplate);
