import React, { Component } from "react";
import img1 from "../../Assets/home-bg.jpg"
import Card from "./BlogCard";
import axios from "axios";
import { BrowserRouter as Router, Route,Link, Switch } from "react-router-dom";
import Navbar from "../Navbar";
import ReadBlog from "./ReadBlog";
import Particle from "../Particle";
import ChangingProgressProvider from "./ChangingProgressProvider";
import { CircularProgressbar ,buildStyles} from 'react-circular-progressbar';
//get();
const Blogs = props => {
    const [Blog, setBlog] = React.useState([]);
    const [t,sett] = React.useState(false);
    //const [selected, setselected] = React.useState([]);
    const get = () =>{
        axios.get("https://preet-portfolio-api.herokuapp.com/blogs")
        .then(response =>{
            // console.log(response.data);
            setBlog(response.data)
            sett(true)
        })

    } 
    // React.useEffect(() => {
    //     get(); 
    // },[]) 

    const handletime = () =>{
        setTimeout(()=>{
            get();
        },3000)
    }
    React.useEffect(() => {
        handletime(); 
    },[])  
    
    
    
        return (
<div>

<Particle/>

<div className="main-head">
                <h1 className="project-heading">
          My <strong className="purple">Blogs </strong> 
        </h1>
        <p style={{ color: "white" }}>Do Read my blogs</p>
            {t ?
            
            

            <div className="container-fluid d-flex justify-content-center">
                
                <div className="row">
                    

                    {Blog.map((item, index) =>{
                          console.log(item.cover.url);
                          return(
                            <div className="col-md-4">
                        <Card sett={sett} id={item.id} imgsrc={item.cover.url} title={item.title} content={item.content} selected={props.selected} setselected={props.setselected}/>
                    </div>
                          )
                }
                )}
                    
                </div>
            </div>
                
             : (
           
        
                  
                <div style={{ width: 150, height: 150, padding:20, marginLeft :"550px"}}>
                <ChangingProgressProvider values={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}>
            {percentage => (
              <CircularProgressbar value={percentage}  styles={buildStyles({
                pathColor: "rgb(23, 23, 23)",
                trailColor: "orange"
              })}/>
            )}
          </ChangingProgressProvider>
                </div>

             )

        
           
             

            }
            </div>
            </div>
        )
        
    }

export default Blogs