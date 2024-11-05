import React, {useMemo, useState} from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'JavaScript', body: 'fdsfds'},
    {id: 2, title: 'CSS', body: 'gasd'},
    {id: 3, title: 'HTML', body: 'llll'},
    {id: 4, title: 'CSS', body: 'zzzz'}]);

  const [filter, setFilter] = useState({sort: '', query: ''});

  const sortedPosts = useMemo(() => {
    console.log('sortedPosts call');
    if (filter.sort) {
      return [...posts].sort(
          (a, b) => a[filter.sort].localeCompare(b[filter.sort]));
    }
    return posts;
  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(
        post => post.title.toLowerCase().includes(filter.query));
  }, [filter.query, sortedPosts]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
  };

  return (<div className="App">
    <PostForm create={createPost}/>
    <hr style={{margin: '15px 0'}}/>
    <PostFilter filter={filter} setFilter={setFilter}/>
    <PostList remove={removePost} posts={sortedAndSearchedPosts}
              title="Posts about JS"/>
  </div>);
}

export default App;

// 1:24:00
// Модульные окна