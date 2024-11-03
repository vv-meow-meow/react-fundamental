import React, {useState} from 'react';
import './styles/App.css';
import PostItem from './components/PostItem';
import PostList from './components/PostList';

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'JavaScript', body: 'Description'},
    {id: 2, title: 'CSS', body: 'Description'},
    {id: 3, title: 'HTML', body: 'Description'},
    {id: 4, title: 'CSS', body: 'Description'}]);

  const [posts2, setPosts2] = useState([
    {id: 1, title: 'Python', body: 'Description'},
    {id: 2, title: 'AIOgram', body: 'Description'},
    {id: 3, title: 'SQLAlchemy', body: 'Description'},
    {id: 4, title: 'Fluentogram', body: 'Description'}]);

  return (<div className="App">
    <PostList posts={posts} title="Посты про JS"/>
    <PostList posts={posts2} title="Посты про Python"/>
  </div>);
}

export default App;