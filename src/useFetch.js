import {useState,useEffect} from 'react';

const useFetch = ()=>{


    const [blogs, setBlogs] = useState(null);

    const [isPending, setIsPending] = useState(true);
    const [error,setError] = useState(null );

    useEffect(() => {
        console.log("use effect run ");
        const abortCont = new AbortController();
    
        setTimeout(() => {
          fetch("http://localhost:8080/blogs")
            .then((res) => {
                if(!res.ok ){
                        throw Error("could not fetch data from resource ");
                }
              return res.json();
            })
            .then((data) => {
              setBlogs(data);
              setIsPending(false);
              setError(null);
            }).catch(err=>{
                if(err.name == 'AbortError'){
                    abortCont.abort();  
                }else{
                    setIsPending(false);
                    setError(err.message );
                }
                   

            });

            return ()=> abortCont.abort();
        }, 30);
      }, []);

      return {blogs, isPending,error , setBlogs}
}

export default useFetch;


