import React from "react";
import { useNavigate } from "react-router-dom";
const Friend = ({ f }) => {
  const navigate = useNavigate();
  const friendDetails = () => {
    navigate(`/friend/${f.id}`);
  };
  return (
    <div className="friend-container">
      <h1>
        {f.id}/.{f.name}
      </h1>
      <p>{f.email}</p>
      <p>{f.phone}</p>
      <button onClick={friendDetails} className="btn">
        Details
      </button>
    </div>
  );
};

export default Friend;
