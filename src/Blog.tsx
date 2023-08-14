import React from "react";
import './Blog.css'


export interface BlogType {
    title : string,
    body: string,
    id: number
  }

interface BlogItem {
    blog: BlogType;
}

function Blog(props: BlogItem) {
    const blog : BlogType = props.blog;
    return (
        <div className="blog_item">
            <h2>{blog.title}</h2>
            <p>{blog.body}</p>
        </div>
    )
}

export default Blog; 