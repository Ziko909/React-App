import React, { useState } from 'react';
import './App.css';
import Navbar from "./Navbar"
import Blogs from "./Blogs"
import { useEffect } from 'react';

export interface BlogList {
  title : string,
  body: string,
  id: number
}

async function fetchdata() {
    try {
        const response = await fetch("http://localhost:5000/blogs");
        if (response.ok === false)
          throw new Error();
        const jsonblogs = response.json();
        return jsonblogs;
    } catch(error : any){
      throw new Error("can't show blogs");
    }
}


function App() : JSX.Element {
  const [blogslist, setblogs] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(undefined);

  const fn = useEffect(() => {
      fetchdata().then((resp : any) => {
        setblogs(resp);
      })
      .catch((error : any) => {
        setError(error.message)
      })
      .finally(() => setIsLoading(false))
    }, []);
  return (
    <div className="App">
      <Navbar />
      { isLoading && <div className="loading">is Loading...</div> }
      { error && <div className="error"> {error} </div> }
      { blogslist && <Blogs blogs={blogslist}/> }
    </div>
  );
}

export default App;
