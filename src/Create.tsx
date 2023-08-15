import { ChangeEvent, FormEvent, useState } from "react";
import { useHistory } from "react-router-dom";
import "./Create.css"



function Create() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [auther, setAuther] = useState('');
    const history = useHistory();

    const onChangeHandler = (e : (ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>)) => {
                if (e.target.name === 'blogTitle')
                    setTitle(e.target.value);
                else if (e.target.name === 'blogBody')
                    setBody(e.target.value);
                else if (e.target.name === 'blogAuther')
                    setAuther(e.target.value);
            }
    const onSumbitHundler = (e : FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const request : RequestInit = {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({title: title, body: body, auther: auther})
        }
        const postBlog = fetch('http://localhost:5000/blogs', request);
        postBlog.then(() => history.push('/'));
    }
    return (
        <div className="create_container">
            <h2> Add a New Blog </h2>
            <form onSubmit={onSumbitHundler}>
                <label htmlFor="blogTitle"> Blog title: </label>
                <input name="blogTitle" value={title} onChange={onChangeHandler}/>
                <label htmlFor="blogBody"> Blog body: </label>
                <textarea name="blogBody" value={body} onChange={onChangeHandler}>
                </textarea>
                <label htmlFor="blogAuther">Blog auther: </label>
                <input name="blogAuther" value={auther} onChange={onChangeHandler}/>
                <button> Add Blog </button>
            </form>
        </div>
    )
}

export default Create;