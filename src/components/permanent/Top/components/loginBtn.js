import React,{useState} from "react"

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import serverUrl from "../../../../var/serverUrl";
import "./loginArea.css"

function LogInFrame({setUserData}) {
    const [show, setShow] = useState(false);

    const [errorMessage, setErrorMessage] = useState("");
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


  
    return (
      <>
      <Button variant="outline-primary"  size="lg" onClick={handleShow}>Iniciar Sesión</Button>

        <Modal show={show} onHide={handleClose} className="modal-frame">
          <Modal.Header closeButton></Modal.Header>
            <Modal.Title className = "login-title">Iniciar Sesión</Modal.Title>
                <Form.Text  className="text-muted login-subtitle" >
                    Ceb 6/4
                </Form.Text>
          
          <Modal.Body >
            <Form className = "form-login">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Número de Control</Form.Label>
                    <Form.Control id="numC" type="text" placeholder="ingresa tu número de control" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control id="pass" type="password" placeholder="Contraseña" />
                </Form.Group>

            </Form>
            <Form.Text className = "error-message-login">
                    {errorMessage}
            </Form.Text>
          </Modal.Body>
          <Modal.Footer>

            <Button variant="primary" size="lg" onClick={() => sendCredentials(setErrorMessage,handleClose,setUserData)}>
              Iniciar Sesión
            </Button>

          </Modal.Footer>
        </Modal>
      </>
    );
  }

  let sendCredentials = (setError,closeForm,setUserData) => {

    let numero_control = document.getElementById("numC").value
    let password = document.getElementById("pass").value

    const pack = {
        numero_control,
        password
    }

    return axios.post(serverUrl + 'logIn', pack).then(
        (data) =>{
            window.localStorage.setItem('JWTK', data.data.token);
            closeForm()
            setUserData(data.data)
        }
    
      ).catch(
          error => 
          setError("Usuario o contraseña incorrectos")
        
      )

  }

  export default LogInFrame;