import { useState,useEffect } from "react";
import BlogList from "./BlogList";
const Home = () => {
  const [blogs, setBlogs] = useState([
    { id: 1, title: "blog 1", author: "author 1" },
    { id: 2, title: "blog 2", author: "author 2" },
    { id: 3, title: "blog 3", author: "author 3" },
    { id: 4, title: "blog 4", author: "Max" },
  ]);


  function handleDelete(id) {
    const newBlogs = blogs.filter((blog )=> blog.id !== id );
    setBlogs(newBlogs);
  }

  const [name,setName] = useState('Lida');

  function changeName(name ){
    setName(name );
  }
  useEffect(()=>{
    console.log('use effect run ');
    


  },[name ])

  return (
    <div className="home">
      <h1> home page </h1>
      <BlogList blogs={blogs} title={"blog list "} handleDelete={handleDelete }  ></BlogList>

      <button onClick={()=>changeName('Max')}> change name ({name })</button>
      {/* <BlogList
        blogs={blogs.filter((blog) => blog.author == "Max")}
        title={"max blog list new  "}
      ></BlogList> */}
    </div>
  );
};

export default Home;
