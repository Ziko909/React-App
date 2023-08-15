import React from "react";
import './Blog.css'
import { Link } from "react-router-dom";


export interface BlogType {
    title : string,
    body: string,
    auther: string,
    id: number
  }

interface BlogItem {
    blog: BlogType;
}

function Blog(props: BlogItem) {
    const blog : BlogType = props.blog;
    return (
        <div className="blog_item">
            <h2>title : {blog.title}</h2>
            <h4>Auther : {blog.auther}</h4>
            <h4> Body : </h4>
            <p> {blog.body} </p>
        </div>
    )
}

export default Blog; 