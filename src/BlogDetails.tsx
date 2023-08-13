import React from "react";
import useFetch from "./useFetch";
import Blog from "./Blog";
import { useParams } from "react-router-dom";
import "./BlogDetails.css"

interface Params {
    id: string;
}
function BlogDetails() {
    const { id } = useParams<Params>();
    const {data: blog, isLoading, error} = useFetch(`http://localhost:5000/blogs/${id}`);

    return (
        <div className="blog_details">
            { isLoading && <div className="loading">is Loading...</div> }
            { error && <div className="error"> {error} </div> }
            { blog && <Blog blog={blog} />}
        </div>
    )
}

export default BlogDetails;