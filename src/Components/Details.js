import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const Details = () => {
  const { friendId } = useParams();
  const [friend, setFriend] = useState({});
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${friendId}`)
      .then((res) => res.json())
      .then((data) => setFriend(data));
  }, []);
  return (
    <div>
      <h1>tell me details :{friendId}</h1>
      <h3>{friend.name} </h3>
      <p>{friend.username} </p>
      <p>{friend.address?.street} </p>
      <p>{friend.company?.name} </p>
      <p>{friend.phone} </p>
      <p>{friend.address?.geo?.lat ? friend.address?.geo?.lat : "null"} </p>
    </div>
  );
};

export default Details;
