import React, { Component, createContext } from 'react'
import axios from "axios"

export const PostContext = createContext();
export default class PostContextProvider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: props.postslist,
        }
    }
    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
          .then(res => {
            const  posts = res.data;
            this.setState({  posts });
            console.log("posts",posts)
            // console.log(res.data.postId,res.data.email)
          })
      }
    
    render() {
        return (
            <PostContext.Provider value={{...this.state}}>
            {this.props.children}
          </PostContext.Provider>
        );
    }
}




