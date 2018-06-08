import React, { Component } from 'react';
import Nav from "./../Nav/Nav"
import {connect} from "react-redux"
import axios from "axios"
import Post from "./../Post/Post"

class Dashboard extends Component {
  constructor(props){
    super(props)

    this.state ={
      posts: []
    }
  }

  componentDidMount(){
    axios.get("/api/posts").then(res =>{
      console.log(res.data)
      this.setState({posts: res.data})
    })
  }

  render() {
    let posts_mapped = this.state.posts.map((post, i) =>{
      const {title, img, content, username, profile_pic, userId} = post
      return <Post key={i} title={title} img={img} content={content} author={username} profile_pic={profile_pic} userId = {userId} />
    })
    return (
      <div className="row">
      <Nav />  
      {posts_mapped}
      </div>
    )
  }
}
function mapStateToProp(state){
  return{
    username: state.username,
    userId: state.userId
  }
}

export default connect(mapStateToProp)(Dashboard)