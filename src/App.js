import React, {useState} from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'JavaScript', body: 'Description'},
    {id: 2, title: 'CSS', body: 'Description'},
    {id: 3, title: 'HTML', body: 'Description'},
    {id: 4, title: 'CSS', body: 'Description'}]);

  const [post, setPost] = useState({title: '', body: ''});

  const addNewPost = (e) => {
    e.preventDefault();
    setPosts([...posts, {...post, id: Date.now()}]);
    setPost({title: '', body: ''});
  };

  return (<div className="App">
    <form>
      <MyInput
          value={post.title}
          onChange={(e) => setPost({...post, title: e.target.value})}
          type="text"
          placeholder="Название поста"/>
      <MyInput
          value={post.body}
          onChange={(e) => setPost({...post, body: e.target.value})}
          type="text"
          placeholder="Описание поста"/>
      <MyButton onClick={addNewPost}>Создать пост</MyButton>
    </form>
    <PostList posts={posts} title="Посты про JS"/>
  </div>);
}

export default App;