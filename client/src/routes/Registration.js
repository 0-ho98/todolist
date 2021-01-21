import React from "react";
import axios from "axios";

class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      userId: "",
      userPassword: "",
      userPasswordConfirm: "",
      birthday: "",
      gender: '남자',
      eMail: "",
    };
  }

  handleFormSubmit = (e) => {
    e.preventDefault(); //데이터가 서버로 전달 됨에 있어서 오류가 발생하지 않기 위해 불러옴
    this.comparePassword();
    this.compareEntirety();
    this.addMembership();
    
  };
  comparePassword = () => {
    const { userPassword, userPasswordConfirm } = this.state;
    if (userPassword == userPasswordConfirm) {
      console.log("잘 비교했구만");
    } else {
      console.log("비밀번호 다시 비교해주세요");
    }
  };

  compareEntirety(){
    const userInfo = this.state; 
    for (const key in userInfo) {
        if(userInfo[key] == ''){
            console.log('문제있어요');
        }
    }
  }

  handleValueChange = (e) => {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
    console.log(this.state);
  };
  addMembership(){
    const {
        userName,
        userId,
        userPassword,
        birthday,
        gender,
        eMail,
      } = this.state;
      axios.post("/login", {
        userName,
        userId,
        userPassword,
        birthday,
        gender,
        eMail,
      }).then((response)=>{
          console.log(response)
      }).catch((error)=>{
          console.log(error);
      });
  }
  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <h1>회원가입</h1>
        이름:{" "}
        <input type="text" name="userName" onChange={this.handleValueChange} />
        <br />
        아이디:{" "}
        <input type="text" name="userId" onChange={this.handleValueChange} />
        <br />
        비밀번호:{" "}
        <input
          type="password"
          name="userPassword"
          onChange={this.handleValueChange}
        />
        <br />
        비밀번호 재확인:{" "}
        <input
          type="password"
          name="userPasswordConfirm"
          onChange={this.handleValueChange}
        />
        <br />
        생년월일:{" "}
        <input type="date" name="birthday" onChange={this.handleValueChange} />
        <br />
        성별:
        <select name="gender" onChange={this.handleValueChange}>
          <option value="남자">남자</option>
          <option value="여자">여자</option>
        </select>
        <br />
        이메일:{" "}
        <input type="email" name="eMail" onChange={this.handleValueChange} />
        <br />
        <button type="submit">회원가입하기</button>
      </form>
    );
  }
}
export default Registration;
