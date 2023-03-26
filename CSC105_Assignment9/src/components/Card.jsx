// import React from "react";
// import "../styles/card.css";

// function Card({header, children}){
//     return(
//         <div className="card-container">
//             <h2 className="card-header">{header}</h2>
//             <p className="card-body">{children}</p>

//         </div>
//     );
// }
// export default Card;

import React from 'react';
import "../styles/card.css";
import "./List";

const Card = ({ user }) => {
    const { name, job, hobby } = user;
  return (
    <div className="card-container">
      <p>Name: {user.name}</p>
      <p>Job: {user.job}</p>
      <p>Hobby: {user.hobby}</p>
    </div>
  );
};

export default Card;











