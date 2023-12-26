import { useState, useEffect } from "react";
import BlogList from "../components/BlogList";
import useFetch from "../components/useFetch";

const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <div classinput="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title={"All Blogs!"} />}
    </div>
  );
};

export default Home;
