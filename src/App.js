import React, {useState} from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'JavaScript', body: 'Description'},
    {id: 2, title: 'CSS', body: 'Description'},
    {id: 3, title: 'HTML', body: 'Description'},
    {id: 4, title: 'CSS', body: 'Description'}]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
  };

  return (<div className="App">
    <PostForm create={createPost}/>
    {posts.length
        ? <PostList
            remove={removePost}
            posts={posts}
            title="Posts about JS"/>
        : <h1 style={{textAlign: 'center'}}>
          Posts not found
        </h1>}
  </div>);
}

export default App;