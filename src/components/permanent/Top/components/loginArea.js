import React,{useState,useEffect} from "react"

import LoginBtn from "./loginBtn"
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import axios from "axios";
import serverUrl from "../../../../var/serverUrl";
import "./loginArea.css"

import apiHeader from "../../../../var/apiHeader";
import{ Link } from 'react-router-dom';

function LoginAreaa(){

  let [data,setData] = useState(false)
  let [token,setToken] = useState(null)

  useEffect(() => {setToken(window.localStorage.getItem('JWTK'))},[])

  useEffect(() => {
    let tryLogin = () => setData(true);
    
    console.log(window.localStorage.getItem('JWTK') + "dd")

    if(token != null)
      axios.get(serverUrl + "getUserInfo",apiHeader())
      .then(res => setData(res.data))
      .catch(tryLogin)
    else
      tryLogin()

  },[token])
  
  if (data === false)
    return <div></div>
  else if (data === true)
    return <LoginBtn setUserData = {setToken}/>
  else
    return LoggedOptions(data)
}

function LoggedOptions(alumnoData){
  return <Dropdown >
          <Dropdown.Toggle className="buttonUserInfo" id="dropdown-basic">
            {alumnoData.nombre_completo}
          </Dropdown.Toggle>

          <Dropdown.Menu className = "userInfoMenu">
              
            <Form.Text  className="text-muted alu-info-card-name" >
              {alumnoData.nombre_completo}
            </Form.Text>
            <Dropdown.Divider />
            <Dropdown.Item><Link to="/boleta">Ver Boleta</Link></Dropdown.Item>

          </Dropdown.Menu>
        </Dropdown>
}



  
  export default LoginAreaa;

