// here is the child component 
const BlogList = ({blogs, title ,handleDelete}) => {
    // const blogs = props.blogs;
    // const title = props.title;
    return ( 
        <div className="blog-list">
             <h2> {title}</h2> 
            { blogs.map((blog) =>(
                <div className="blog-item" key={blog.id}>
                    <p>title: {blog.title }</p>  
                    <p>author: {blog.author}</p>
                    <div>
                    <button onClick={ ()=>handleDelete(blog.id )}> Delete </button>
                    </div>
                 </div>
            ))} 
        </div> 
     );
}
 
export default BlogList;