import {  useState } from "react";
import { useHistory } from "react-router-dom";
const Create = () => {

    const [title,setTitle] = useState('');
    const [body,setBody] = useState('');
    const [author,setAuthor] = useState('');
    const [isPending, setIsPending] = useState(false);
    const [result, setResult] = useState('');

    const history = useHistory();

    const submitHandle = (e)=>{
        e.preventDefault();
        const blog = {title, body,author};
        console.log(blog );
        console.log('submit form here ');
        fetch('http://localhost:8080/blogs/',{
            method:"POST",
            body:JSON.stringify(blog),
            headers:{"Content-Type":"application/json"}
        }).then((resp)=>{
            if(resp.ok){
                setResult('add success');
            }
                console.log('new blog added',resp );
                setIsPending(false);
                history.go(-1);
        })
    }


    return ( 
        <>
        <h2>create new blog </h2>
        <form className="create" onSubmit={submitHandle}>
            <label>title </label>
            <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} />
            <label> body </label>
            <textarea cols={40} rows={10} value={body}
            onChange={(e)=>setBody(e.target.value)}
            > </textarea>
            
            <div className="row">
            <label> author</label>
            <select name="author" value={author} onChange={(e)=>setAuthor(e.target.value )}>
            <option >  </option>
                <option value="taylor">Taylor </option>
                <option value="Jon ">Jon  </option>
            </select>

           
            </div>
            <div>
                { !isPending &&  <button type="submit" className="submitBtn"> submit - {result} </button> }

                {isPending && <span> adding blog .... </span>}
           
            </div>
            
        </form>
        </> 
        

    );
}
 
export default Create;