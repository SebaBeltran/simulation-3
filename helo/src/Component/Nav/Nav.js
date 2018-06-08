import React from "react";
import "./Nav.css"
import icon_add from "./icon_add.png"
import icon_home from "./icon_home.png"
import icon_power from "./icon_power.png"
import {connect} from "react-redux"
import {Link} from "react-router-dom"

function Nav(props){
  console.log(props)
return(
    <div className="nav_wrapper">
      <div className="profile_container">
        <img className="profile_img" src={props.prof_img} />
        <p>{props.username}</p>
      </div>
      <div className="nav_menu column">
        <div className="column h_center">
        <Link to="/dashboard">
          <img src={icon_home} />
        </Link>
        <Link to="/new">  
          <img src={icon_add} />
        </Link>  
        </div>
        <div>
        <Link to="/">
          <img src={icon_power} />
        </Link>  
        </div>  
      </div>
    </div>  
  )
}

function mapStateToProps(state){
  console.log(state)
  return{
    prof_img: state.prof_pic,
    username: state.username
  }
}
export default connect(mapStateToProps)(Nav)