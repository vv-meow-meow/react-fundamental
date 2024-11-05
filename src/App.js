import React, {useMemo, useState} from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import MySelect from './components/UI/select/MySelect';
import MyInput from './components/UI/input/MyInput';

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'JavaScript', body: 'fdsfds'},
    {id: 2, title: 'CSS', body: 'gasd'},
    {id: 3, title: 'HTML', body: 'llll'},
    {id: 4, title: 'CSS', body: 'zzzz'}]);

  const [selectedSort, setSelectedSort] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const sortedPosts = useMemo(() => {
    console.log('sortedPosts call');
    if (selectedSort) {
      return [...posts].sort(
          (a, b) => a[selectedSort].localeCompare(b[selectedSort]));
    }
    return posts;
  }, [selectedSort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(
        post => post.title.toLowerCase().includes(searchQuery));
  }, [searchQuery, sortedPosts]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
  };

  const sortPosts = (sort) => {
    setSelectedSort(sort);
  };

  return (<div className="App">
    <PostForm create={createPost}/>
    <hr style={{margin: '15px 0'}}/>
    <div>
      <MyInput
          value={searchQuery}
          placeholder="Search"
          onChange={e => setSearchQuery(e.target.value)}
      />
      <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue="Sort by"
          options={[
            {value: 'title', name: 'By Title'},
            {value: 'body', name: 'By Description'}]}
      />
    </div>
    {sortedAndSearchedPosts.length ? <PostList
        remove={removePost}
        posts={sortedAndSearchedPosts}
        title="Posts about JS"/> : <h1 style={{textAlign: 'center'}}>
      Posts not found
    </h1>}
  </div>);
}

export default App;

// 1:05:37