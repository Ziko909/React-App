import React from "react";
import "./Blogs.css"
import { BlogList } from "./App";

interface BlogsType {
    blogs: BlogList[]
}

function Blogs(props : BlogsType) : JSX.Element {
    const blogs : BlogList[] = props.blogs;
    return (
        <div className="blogs_container">
            {blogs.map((blog : BlogList) => (
                <div className="blog_item" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>{blog.body}</p>
                </div>
            ))}
        </div>
        )
}

export default Blogs;