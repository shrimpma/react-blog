import { useParams }  from 'react-router-dom'
import useFetch from './useFetch';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
const BlogDetail = () => {
    // "http://localhost:8080/blogs"
    const { id } = useParams();
    const [result, setResult] = useState();
   const {blogs: blog  ,error,isPending} = useFetch("http://localhost:8080/blogs/" + id ); 
   console.log(blog);

   const history = useHistory();
   const handleDelete = ()=>{
        fetch("http://localhost:8080/blogs/"+id, {method:"DELETE"}).then(
            (res)=>{
                if(res.ok ){
                    history.push('/');
                }else{
                    setResult('delete fail ');
                }
            }
        )
   }

    return (
        <div className="blog-detail">
          
           { blog &&  <>
            <h2> {blog.title }</h2><p> {blog.author}</p>
           </>}

           <div>
            <button className='submitBtn' onClick={handleDelete}> Delete </button> <span>{result }</span>
           </div>
            
        </div>
      );
}
 
export default BlogDetail;