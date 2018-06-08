import React, { Component } from 'react';
import "./Auth.css"
import {connect} from "react-redux"
import {getLoginData} from "./../../ducks/reducer";
import axios from "axios"

class Auth extends Component {
  constructor(){
    super();

    this.state = {
      usernameInput: "",
      passwordInput: "",
      error: ""
    }
  }

  login() {
    const {usernameInput, passwordInput} = this.state
    if(usernameInput && passwordInput) {
      axios.post('/api/login', {username: usernameInput, password: passwordInput}).then(res => {
        console.log(res.data)
        if (res.data.length !== 0) {
          const {id, username, password, profile_pic} = res.data[0];
          this.props.getLoginData(id, username, password, profile_pic);
          this.props.history.push("/dashboard")
				} 
      })
    } else {
      this.setState({error: 'Ooops, it looks like you forget something'})
    }
  }

  register() {
    const {usernameInput, passwordInput} = this.state
    if(usernameInput && passwordInput) {
      axios.post('/api/register', {username: usernameInput, password: passwordInput}).then(res => {
        if (res.data.length !== 0) {
          const {id, username, password, profile_pic} = res.data[0];
          this.props.getLoginData(id, username, password, profile_pic);
          this.props.history.push("/dashboard")
				}
      })
    } else {
      this.setState({error: 'Ooops, it looks like you forget something'})
    }
  }


  render() {
    return (
      <div className="auth_wrapper row h_center v_center">
        <div className="login_wrapper column h_center v_center">
          
          <div>
            <h1>HELO</h1>
            <div className="input_field row s_between">
              <p>username</p>
              <input onChange={(e)=>this.setState({usernameInput: (e.target.value)})}/>
            </div> 
            <div className="input_field row s_between">
              <p>password</p>
              <input onChange={e => this.setState({passwordInput: (e.target.value)})}/>
            </div>
           
            <div className="row s_around">
              <button onClick={()=>this.login()}>LOGIN</button>
              <button onClick={()=>this.register()}>REGISTER</button>
            </div> 
          </div> 
          <div>
              <p>{this.state.error}</p>
            </div>   
        </div>
      </div>  
    )
  }
}

export default connect(null, {getLoginData})(Auth)


