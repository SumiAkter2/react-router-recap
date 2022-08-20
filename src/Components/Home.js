import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <h1>We are From home</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/friend">Friends</Link>
        <Link to="/post">Post</Link>
        <Link to="/about">About</Link>
      </nav>
    </div>
  );
};

export default Home;
