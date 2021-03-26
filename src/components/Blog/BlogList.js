import React, { Component } from "react";
import img1 from "../../Assets/home-bg.jpg"
import Card from "./BlogCard";

const Blogs = props => {
        return (
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <Card imgsrc={img1} title="Card Title 1" content="Paragraph 1 Lorem ipsum dolor sit amet, connect. Lorem ips. Lorem ipsum dolor. Lorem ipsum
                    .lorum dolor. Lorem ipsum dolor. Lorem" />
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img1} title="Card Title 2" content="Paragraph 2 Lorem ipsum dolor sit amet, connect. Lorem ips. Lorem ipsum dolor. Lorem ipsum
                    .lorum dolor. Lorem ipsum dolor. Lorem" />
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img1} title="Card Title 3" content="Paragraph 3 Lorem ipsum dolor sit amet, connect. Lorem ips. Lorem ipsum dolor. Lorem ipsum
                    .lorum dolor. Lorem ipsum dolor. Lorem" />
                    </div>
                </div>
            </div>
        )
    }

export default Blogs