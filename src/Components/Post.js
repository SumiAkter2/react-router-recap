import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const Post = () => {
  const { postId } = useParams();
  const [post, setPost] = useState({});
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [postId]);
  return (
    <div>
      <h1>Post Details : {postId}</h1>
      <h1>{post.length} </h1>
      <h2>Detail from outlet</h2>
      <p>{post.title}</p>
    </div>
  );
};

export default Post;
