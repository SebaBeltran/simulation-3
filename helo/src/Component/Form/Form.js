import React, { Component } from 'react';
import Nav from "./../Nav/Nav"
import axios from "axios"
import {connect} from "react-redux"

class Form extends Component {
  constructor(){
    super();

    this.state={
      default_img: "http://experienceidyllwild.com/images/no-image-available2.jpg",
      titleInput: "",
      imgInput: "",
      contentInput: ""
    }
    this.addPost = this.addPost.bind(this);
  }

  addPost(){
    let body = {
      title: this.state.titleInput,
      img: this.state.imgInput,
      content: this.state.contentInput,
      author: this.props.userId
    }
    axios.post("/api/addpost", body).then(res =>{
      // console.log(res.data)
      this.props.history.push('/dashboard')
    });
  }

  render() {
    console.log(this.state)
    return (
      <div className="row">
        <Nav />  
        
        <div className="form_wrapper">
          <h1>New Post</h1>
          <p>Title</p>
          <input value={this.state.titleInput} onChange={(e)=>this.setState({titleInput: (e.target.value)})}/>
          <img src={!this.state.imgInput ? this.state.default_img : this.state.imgInput} />
          <p>Image URL:</p>
          <input value = {this.state.imgInput} onChange={(e) => this.setState({imgInput: (e.target.value)})} placeholder="Add the image url"/>
          <p>Image URL:</p>
          <textarea onChange={(e)=>this.setState({content: e.target.value})}/>
          <button onClick={()=> this.addPost()}>Post</button>
        </div>  
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    userId: state.userId
  }
}
export default connect (mapStateToProps)(Form)