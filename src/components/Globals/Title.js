import React from 'react'

const Title = ({title, title2}) => {
  return ( 
    <div className="row">
      <div className="col text-center mb-3">
        <h1 className="display-4 text-capitalize">{title} {title2}</h1>
        <hr />
      </div>
    </div>
   );
}
 
export default Title;
