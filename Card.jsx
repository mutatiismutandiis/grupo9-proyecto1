import React, { useState } from "react";
import data from "./data.json";

const Card = () => {

  const [index, setINdex] = useState(0);

  const identifierGroup = "G9-NCCCP";
  const groupName = "React-G9";

  const findGroup = data.find((group) => {
    return group.id === identifierGroup;
  });

  const { leader, members } = findGroup;

  const handleClick = () => {
    setINdex(index + 1);
  };

  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img
          src="./public/communityIcon_4g1uo0kd87c61.png"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{groupName}</h5>
          <p className="card-text">{identifierGroup}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Leader: {leader}</li>
          <li className="list-group-item">Developer: {members[index]}</li>
        </ul>
        <div className="card-body">
          <button
            type="button"
            className="btn btn-warning"
            onClick={handleClick}
          >
            Next developer
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
