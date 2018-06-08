import React, {Component} from "react";
import "./Post.css"

export default class Post extends Component{
  constructor(props){
    super(props)
  }
  render(){
    console.log(this.props)
    return(
      <div className="post_wrapper column s_between">
        <div className="row s_between">
          <h2>{this.props.title}</h2>
          <div className="row v_center h_center s_between">
            <p> by {this.props.author}</p>
            <img className="author_pic" src={this.props.profile_pic} />
          </div>  
        </div> 
        <div className="row">
          <img className="article_pic"src={this.props.img} />
          <p>{this.props.content}</p>
        </div>
      </div>  
    )
  }
}