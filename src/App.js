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

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now(), title, body,
    };
    setPosts([...posts, newPost]);
    setTitle('');
    setBody('');
  };

  return (<div className="App">
    <form>
      <MyInput
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Название поста"/>
      <MyInput
          value={body}
          onChange={(e) => setBody(e.target.value)}
          type="text"
          placeholder="Описание поста"/>
      <MyButton onClick={addNewPost}>Создать пост</MyButton>
    </form>
    <PostList posts={posts} title="Посты про JS"/>
  </div>);
}

export default App;