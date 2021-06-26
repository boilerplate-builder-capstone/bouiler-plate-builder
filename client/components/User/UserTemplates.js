import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
// import {randomName} from '../../../public/utility/randomName'

const UserCreatedTemplates = (props) => {


  useEffect(() => {
    props.getTemplates();
  }, []);

  // const randomNam = randomName()

  return (
    <ul className="template">
      {
      // name.length
      //   ? props.templates.filter((template) => template.userId === user.id)
      //   .map((template) => {
      //     return (
      //       <div key={template.id}>
      //         <li id="template">
      //           <Link to={`jsonfile`}>
      //             <h2>{template.randomNam}</h2>
      //           </Link>
      //         </li>
      //       </div>
      //     );
      //   })
      //   :
        props.templates
          .filter((template) => template.userId === user.id)
          .map((template) => {
            return (
              <div key={template.id}>
                <li id="tempalte">
                  <Link to={`jsonfile`}>
                    <h2>Name: {template.name}</h2>
                  </Link>
                </li>
              </div>
            );
          })}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  templates: state.templates,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getTemplates: () => dispatch(getTemplates()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserCreatedTemplates);
