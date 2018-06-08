import axios from "axios"
const initialState = {
  username:"",
  profile:"",
  userId: "",
  prof_pic: ""
}

const GET_LOGIN_DATA = "GET_LOGIN_DATA"

export default function reducer(state = initialState, action){
  switch(action.type){
    case GET_LOGIN_DATA:
      const {username, password, userId, prof_pic} = action.payload;
      return Object.assign({}, state, {username: username, password: password, userId: userId, prof_pic: prof_pic});
    default:
      return state;  
  }
  return 
}

export function getLoginData(id, userName, pass, img){
  let user = {username: userName, password: pass, userId: id, prof_pic: img}
  return{
    type: GET_LOGIN_DATA,
    payload: user
  }
}