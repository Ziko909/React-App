import React from "react";
import useFetch from "./useFetch";
import Blog from "./Blog";
import { useHistory, useParams } from "react-router-dom";
import "./BlogDetails.css"

interface Params {
    id: string;
}
function BlogDetails() {
    const { id } = useParams<Params>();
    const {data: blog, isLoading, error} = useFetch(`http://localhost:5000/blogs/${id}`);
    const history = useHistory();

    const onClickHundler = (e : any) => {
        const request = {
            method: 'DELETE',
        }
        const deleteBlog = fetch(`http://localhost:5000/blogs/${id}`, request);
        deleteBlog.then(() => {
            history.push('/');
        })
    }
    return (
        <div className="blog_details">
            { isLoading && <div className="loading">is Loading...</div> }
            { error && <div className="error"> {error} </div> }
            { blog && <Blog blog={blog} /> }
            { blog && <button onClick={onClickHundler}>Delete</button> }
        </div>
    )
}

export default BlogDetails;