import React, {useRef, useState} from 'react';
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
  const bodyInputRef = useRef();

  const addNewPost = (e) => {
    e.preventDefault();
    console.log(title);
    console.log(bodyInputRef.current.value);
  };

  return (<div className="App">
    <form>
      {/* Managed component */}
      <MyInput
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Название поста"/>
      {/* Unmanaged / Uncontrolled Component */}
      <MyInput
          ref={bodyInputRef}
          type="text"
          placeholder="Описание поста"/>
      <MyButton onClick={addNewPost}>Создать пост</MyButton>
    </form>
    <PostList posts={posts} title="Посты про JS"/>
  </div>);
}

export default App;