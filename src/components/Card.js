import React from "react";

const Card = ({ name, email }) => {
  return (
    <div className="contact">
      <img src={`https://robohash.org/${name}?size=100x100`} alt="test" />
      <div className="info">
        <h2 className="name">{name}</h2>
        <p className="email">{email}</p>
      </div>
    </div>
  );
};

export default Card;
