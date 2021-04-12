import React, { Component } from "react";
import img1 from "../../Assets/home-bg.jpg"
import Card from "./BlogCard";
import axios from "axios";

import ReadBlog from "./ReadBlog";

//get();
const Blogs = props => {
    const [Blog, setBlog] = React.useState([]);
    const [t,sett] = React.useState(true);
    const [selected, setselected] = React.useState([]);
    const get = () =>{
        axios.get("https://blog-api-v01.herokuapp.com/blogs/")
        .then(response =>{
            // console.log(response.data);
            setBlog(response.data)
        })

    } 
    React.useEffect(() => {
        get(); 
    },[]) 
    
    console.log(selected)
    
        return (
<div>


            {t ?
            
            <div className="main-head">
                <h1 className="project-heading">
          My Recent <strong className="purple">Blog </strong> Posts
        </h1>
        <p style={{ color: "white" }}>Do give a read to some of my blogs</p>

            <div className="container-fluid d-flex justify-content-center">
                
                <div className="row">
                    

                    {Blog.map((item, index) =>{
                          console.log(item.cover_image.url);
                          return(
                            <div className="col-md-4">
                        <Card sett={sett} id={item.id} imgsrc={item.cover_image.url} title={item.title} content={item.content} setselected={setselected}/>
                    </div>
                          )
                }
                )}
                    
                </div>
            </div>
                </div>
             : 
            

            <ReadBlog selected={selected}/>
             

            }
            </div>
        )
        
    }

export default Blogs