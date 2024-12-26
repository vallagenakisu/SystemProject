import React from "react";
import { useState, useEffect } from "react";
import axiosClient from "../../axios-client";
import SocialPostCard from "./SocialPostCard";
const NewsFeed = () => {
  const [posts, setPosts] = useState([]);
  // const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axiosClient.get("/newsFeed");
        setPosts(response.data);
        console.log(response.data);
      } catch (err) {
        console.error("Error fetching posts:", err);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      {posts.map((post,index) => (
        <SocialPostCard key={index} post={post} />
      ))}
    </div>
  );
};

export default NewsFeed;
