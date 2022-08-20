import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
// import Post from "./Post";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  return (
    <div>
      <h1> Facebook Post </h1>
      <h1>{posts.length} </h1>
      {posts.map((p) => (
        <Link to={`/post/${p.id}`} key={posts.id}>
          .. {p.id}.//
        </Link>
      ))}
      <h1>Here is Outlet</h1>
      <Outlet />
    </div>
  );
};

export default Posts;
