import React, { useEffect, useState } from "react";
import Friend from "./Friend";

const Friends = () => {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setFriends(data));
  }, []);

  return (
    <div>
      <h1>Hello Friends</h1>
      <h1>{friends.length}</h1>
      <div>
        {friends.map((f) => (
          <Friend key={friends.id} f={f}></Friend>
        ))}
      </div>
    </div>
  );
};

export default Friends;
