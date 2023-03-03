import '../css/styleBook.css'
import React from 'react';

function ValidFieldsSubmit(props) {


  return (

    <>
    
      <h1 className="display-4">
        {props.titulo || ''}
      </h1>

      <div>
        {props.success &&
          <div className="alert alert-success" role="alert">
            {props.msnSuccess || ''}
          </div>
        }
        {props.error &&
          <div className="alert alert-danger" role="alert">
            {props.msnError || ''}
          </div>
        }
        {props.warn &&
          <div className="alert alert-warning" role="alert">
            {props.msnWarn || ''}
          </div>
        }
      </div>
    </>

  );
};

export default ValidFieldsSubmit;