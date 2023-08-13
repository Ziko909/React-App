import React from "react";
import useFetch from "./useFetch";
import Blogs from "./Blogs";


function Home() : JSX.Element {
    const {data: blogslist, isLoading, error} = useFetch('http://localhost:5000/blogs');

    return (
        <div>
            { isLoading && <div className="loading">is Loading...</div> }
            { error && <div className="error"> {error} </div> }
            { blogslist && <Blogs blogs={blogslist}/> }
        </div>
    )
}

export default Home;