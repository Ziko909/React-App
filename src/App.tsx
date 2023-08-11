import React from 'react';
import './App.css';
import Navbar from "./Navbar"
import Blogs from "./Blogs"

export interface BlogList {
  title : string,
  body: string,
  id: number
}

function App() : JSX.Element {
      const blogs : BlogList[] = [{
        title: "My first Blog", body: "written in january", id: 1
    }, {
        title: "My second Blog", body: "written in mars", id: 2
    }, {
        title: "My third Blog", body: "written in aout", id: 3
    }
    ]
  return (
    <div className="App">
      <Navbar />
      <Blogs blogs={blogs}/>
    </div>
  );
}

export default App;
