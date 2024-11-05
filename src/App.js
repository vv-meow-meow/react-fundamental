import React, {useState} from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import MySelect from './components/UI/select/MySelect';

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'JavaScript', body: 'fdsfds'},
    {id: 2, title: 'CSS', body: 'gasd'},
    {id: 3, title: 'HTML', body: 'llll'},
    {id: 4, title: 'CSS', body: 'zzzz'}]);

  const [selectedSort, setSelectedSort] = useState('');
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
  };

  const sortPosts = (sort) => {
    setSelectedSort(sort);
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
    console.log(sort);
  };

  return (<div className="App">
    <PostForm create={createPost}/>
    <hr style={{margin: '15px 0'}}/>
    <div>
      <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue="Sort by"
          options={[
            {value: 'title', name: 'By Title'},
            {value: 'body', name: 'By Description'}]}
      />
    </div>
    {posts.length ? <PostList
        remove={removePost}
        posts={posts}
        title="Posts about JS"/> : <h1 style={{textAlign: 'center'}}>
      Posts not found
    </h1>}
  </div>);
}

export default App;

// 1:05:37