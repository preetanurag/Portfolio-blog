import React, { Component } from "react";
import img1 from "../../Assets/home-bg.jpg"
import Card from "./BlogCard";
import axios from "axios";



//get();
const Blogs = props => {
    const [Blog, setBlog] = React.useState([]);
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
    
        return (
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    
                   
                    {Blog.map((item, index) =>{
                          console.log(item.cover_image.url);
                          return(
                            <div className="col-md-3">
                        <Card imgsrc={item.cover_image.url} title={item.title} content="Paragraph 1 Lorem ipsum dolor sit amet, connect. Lorem ips. Lorem ipsum dolor. Lorem ipsum
                    .lorum dolor. Lorem ipsum dolor. Lorem" />
                    </div>
                          )
                }
                )}
                    
                </div>
            </div>
        )
    }

export default Blogs