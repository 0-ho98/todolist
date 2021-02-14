import React from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import "./Login.css";
//import Dialog from "@material-ui/core/Dialog";
//import DialogContent from "@material-ui/core/DialogContent";
//import Modal from "@material-ui/core/Modal";
import Dialog from "@material-ui/core/Dialog";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: "",
      userPassword: "",
      open: false,
    };
  }
  handleId = (e) => {
    this.setState({
      userId: e.target.value,
    });
  };

  handlePassword = (e) => {
    this.setState({
      userPassword: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.enterId();
  };

  enterId() {
    const { userId, userPassword } = this.state;
    axios
      .post("/Main", {
        userId,
        userPassword,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleClickOpen = () => {
    this.setState({
      open: true,
    });
  };

  handleClose = () => {
    this.setState({
      userId: "",
      userPassword: "",
      open: false,
    });
  };

  render() {
    const formStyle = {
      margin: 50,
    };
    const buttonStyle = {
      marginTop: 5,
    };
    const middleStyle = {
      display: "flex",
      justifyContent: "center",
    };
    return (
      <Dialog
        open={this.props.islogin}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <Form onSubmit={this.handleSubmit} style={formStyle}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label style={middleStyle}>아이디</Form.Label>
            <Form.Control
              type="text"
              placeholder="아이디"
              value={this.state.userId}
              onChange={this.handleId}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label style={middleStyle}>비밀번호</Form.Label>
            <Form.Control
              type="password"
              placeholder="비밀번호"
              value={this.state.userPassword}
              onChange={this.handlePassword}
            />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="로그인 상태유지" />
          </Form.Group>
          <Button variant="success" type="submit" style={buttonStyle} block>
            로그인
          </Button>
          <Button
            variant="danger"
            style={buttonStyle}
            onClick={this.handleClose}
            block
          >
            나가기
          </Button>
        </Form>
      </Dialog>
    );
  }
}
export default Login;
