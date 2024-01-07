
import { useState,useEffect } from "react";
import BlogList from "./BlogList";
const Home = () => {
  const [blogs, setBlogs] = useState(null );

  const [isPending, setIsPending] = useState(true );


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

    setTimeout(() => {
        fetch("http://localhost:8080/blogs").then(res=>{
        return res.json()
    }).then(data=>{
        setBlogs(data);
        setIsPending(false);
    })
    }, 3000);
    
    


  },[name ])

  return (
    <div className="home">
      <h1> home page </h1>

       { isPending && <div> loading  </div>}
       { blogs && <BlogList blogs={blogs} title={"blog list "} handleDelete={handleDelete }  ></BlogList>}

      <button onClick={()=>changeName('Max')}> change name ({name })</button>
      {/* <BlogList
        blogs={blogs.filter((blog) => blog.author == "Max")}
        title={"max blog list new  "}
      ></BlogList> */}
    </div>
  );
};

export default Home;
