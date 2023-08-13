
import './App.css';
import Navbar from "./Navbar"
import Blogs from "./Blogs"
import useFetch from './useFetch';

export interface BlogList {
  title : string,
  body: string,
  id: number
}


function App() : JSX.Element {
  const {data: blogslist, isLoading, error} = useFetch('http://localhost:5000/blogs');

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
