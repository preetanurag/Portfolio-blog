import React from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "./card-style.css";


const BlogCard = props => {
    return(
        <div className="card text-center shadow">
            <div className="overflow">
                <img src={props.imgsrc} alt="image1" className="card-img-top" />
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text text-secondary">
                   {props.content}
                </p>
                <a href="#" className="btn btn-outline-success">Read Blog</a>
            </div>
        </div>
    );
}

export default BlogCard;