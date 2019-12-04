import React from 'react';

import Header from './components/header'
import PostContextProvider from './contexts/post-context'
import PostList from './components/PostList'
function App() {
  return (
    <div className="App">
      <PostContextProvider>
        <Header />
        <PostList />
        </PostContextProvider>
      </div>
      );
    }
    
    export default App;
