import React, { Component } from 'react'

import Post from './card'
import { PostContext } from '../contexts/post-context'
export default class PostList extends Component {
  static contextType = PostContext;


  render() {
    console.log("postsfrom postList", this.context);
    console.log("postsfrom context.posts", this.context.posts);
  
 return (
   <>
   {
     this.context&&this.context.posts?
     <PostContext.Consumer>
     {() => {
       return <Post   body={this.context.posts} />;
     }}
   </PostContext.Consumer>:null

   }
   </>
  )
  }
}