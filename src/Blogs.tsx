import React from "react";
import "./Blogs.css"
import Blog from "./Blog";
import { BlogType } from "./Blog";

interface BlogsType {
    blogs: BlogType[]
}

function Blogs(props : BlogsType) : JSX.Element {
    const blogs : BlogType[] = props.blogs;

    return (
        <div className="blogs_container">
            {blogs.map((blog : BlogType) => (
                <Blog blog={blog}></Blog>
            ))}
        </div>
        )
}

export default Blogs;