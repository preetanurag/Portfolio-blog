import React from 'react';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./read-blog.css";
import ReactMarkdown from 'react-markdown'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';



const ReadBlog = props => {

    const [Blog, setBlog] = React.useState([]);
    const [isloaded,setisloaded] = React.useState(false);

   
    const get = () =>{
        axios.get("https://blog-api-v01.herokuapp.com/blogs/60426b1a08a6e46c81c37f36")
        .then(response =>{
             console.log(response.data);
            setBlog(response.data)
            setisloaded(true);
        })

    } 

    const handletime = () =>{
        setTimeout(()=>{
            get();
        },3000)
    }
    React.useEffect(() => {
        handletime(); 
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

               {isloaded==false ?
               <img src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg" alt="cover" className="img-thumbnail img-fluid" /> :

                   <img src={Blog.cover_image.url} alt="cover" className="img-thumbnail img-fluid" /> 

               }
                
                    
                <ReactMarkdown source={Blog.content} renderers={{ code: Component }} />
                
            </div>
        )


}

const Component = ({value, language}) => {
    return (
      <SyntaxHighlighter language={language ?? null} style={dark}>
        {value ?? ''}
      </SyntaxHighlighter>
    );
  };

export default ReadBlog;