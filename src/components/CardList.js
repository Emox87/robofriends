import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  const cardComponent = robots.map((user) => {
    return <Card key={user.id} name={user.name} email={user.email} />;
  });

  return <div className="cardList">{cardComponent}</div>;
};

export default CardList;
