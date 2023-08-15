import React from "react";
import "./Blogs.css"
import Blog from "./Blog";
import { BlogType } from "./Blog";
import { Link } from "react-router-dom";

interface BlogsType {
    blogs: BlogType[]
}

function Blogs(props : BlogsType) : JSX.Element {
    const blogs : BlogType[] = props.blogs;

    return (
        <div className="blogs_container">
            {blogs.map((blog : BlogType) => (
                <Link className="blog-link" to={`/blog/${blog.id}`} key={blog.id}>
                    <Blog blog={blog}></Blog>
                </Link>
            ))}
        </div>
        )
}

export default Blogs;