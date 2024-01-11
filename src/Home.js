import { useState, useEffect } from "react";
import BlogList from "./BlogList";

import useFetch from './useFetch';
const Home = () => {
  
   const {blogs , isPending,error, setBlogs } = useFetch();

  function handleDelete(id) {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  }

  const [name, setName] = useState("Lida");

  function changeName(name) {
    setName(name);
  }

  useFetch();
  

  return (
    <div className="home">
      <h1> home page </h1>

      {isPending && <div> loading </div>}
      {blogs && (
        <BlogList
          blogs={blogs}
          title={"blog list "}
          handleDelete={handleDelete}
        ></BlogList>
      )}

      {/* onClick={()=>changeName('Max')} */}
      <button> change name ({name})</button>
      {/* <BlogList
        blogs={blogs.filter((blog) => blog.author == "Max")}
        title={"max blog list new  "}
      ></BlogList> */}
    </div>
  );
};

export default Home;
