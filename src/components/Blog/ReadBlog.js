import React from 'react';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./read-blog.css";
import ReactMarkdown from 'react-markdown'


const ReadBlog = props => {

    const [Blog, setBlog] = React.useState([]);
    const get = () =>{
        axios.get("https://blog-api-v01.herokuapp.com/blogs/60426b1a08a6e46c81c37f36")
        .then(response =>{
             console.log(response.data);
            setBlog(response.data)
        })

    } 
    React.useEffect(() => {
        get(); 
    },[])  
    
        return (
            <div className="container">
                {/* <h1>{Blog.title}</h1> */}

                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-4">{Blog.title}</h1>
                        <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                    </div>
                </div>

                
                {/* <img src={Blog.cover_image.url} alt="cover" className="img-thumbnail" />  */}
                    
                <ReactMarkdown>{Blog.content}</ReactMarkdown>
                
            </div>
        )

}

export default ReadBlog;