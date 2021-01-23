import React, { useState } from "react";
import axios from "axios";
import ModalBox from "../components/ModalBox";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Paper from "@material-ui/core/Paper";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent:"center",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  formControl: {
    margin: theme.spacing(1),
    maxWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  textRoot: {
    "& > *": {
      margin: theme.spacing(1),
      width: "300px",
    },
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  paper: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(78),
    },
    
  },
}));

const Example = () => {
  const classes = useStyles();
  const [userId, setUserId] = useState("");
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [birthday, setbirthday] = useState("");
  const [gender, setGender] = useState("남자");
  const [passwordError, setPasswordError] = useState(false);
  const [eMail, setEMail] = useState("");

  const passwordErrorMessage = {
    title: "비밀번호 오류",
    description: "비밀번호를 다시 한번 확인 해주세요.",
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    comparePassword();
    addMembership();
  };
  const comparePassword = () => {
    if (userPassword !== passwordCheck) {
      return setPasswordError(true);
    }
  };
  const addMembership = () => {
    axios
      .post("/login", {
        userName,
        userId,
        userPassword,
        birthday,
        gender,
        eMail,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const onChangeId = (e) => {
    setUserId(e.target.value);
  };
  const onChangePassword = (e) => {
    setUserPassword(e.target.value);
  };
  const onChangeName = (e) => {
    setUserName(e.target.value);
  };
  const onChangeEMail = (e) => {
    setEMail(e.target.value);
  };
  const onChangeGender = (e) => {
    setGender(e.target.value);
  };
  const onChangePasswordCheck = (e) => {
    setPasswordCheck(e.target.value);
  };
  const onChangeBirthday = (e) => {
    setbirthday(e.target.value);
  };
  const handleClose = () => {
    setPasswordError(false);
  };
  return (
      <Paper className={classes.paper} elevation={3}>
        <form
          onSubmit={handleFormSubmit}
          className={classes.textRoot}
          noValidate
          autoComplete="off"
        >
          <h1>회원가입</h1>
          <TextField
            id="outlined-basic"
            label="이름"
            variant="outlined"
            name="userName"
            value={userName}
            onChange={onChangeName}
            required
          />
          <br />
          <TextField
            id="outlined-basic"
            label="아이디"
            variant="outlined"
            name="userId"
            value={userId}
            onChange={onChangeId}
            required
          />
          <br />
          <TextField
            id="outlined-basic"
            label="비밀번호"
            type="password"
            variant="outlined"
            name="userPassword"
            value={userPassword}
            onChange={onChangePassword}
            required
          />
          <br />
          <TextField
            id="outlined-basic"
            label="비민번호 확인"
            type="password"
            variant="outlined"
            name="userPasswordConfirm"
            value={passwordCheck}
            onChange={onChangePasswordCheck}
            required
          />
          <br />
          <TextField
            id="outlined-basic"
            label="이메일"
            type="email"
            variant="outlined"
            name="eMail"
            value={eMail}
            onChange={onChangeEMail}
            required
          />
          <br />
          <TextField
            id="date"
            label="생년월일"
            name="birthday"
            type="date"
            value={birthday}
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={onChangeBirthday}
            required
          />
          <br />
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">성별: </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              name="gender"
              id="demo-simple-select"
              value={gender}
              onChange={onChangeGender}
              required
            >
              <MenuItem value="남자">남자</MenuItem>
              <MenuItem value="여자">여자</MenuItem>
            </Select>
          </FormControl>
          <br />
          <div className={classes.root}>
            <Button type="submit" variant="contained" color="primary">
              회원가입하기
            </Button>
          </div>
          <ModalBox
            passwordError={passwordError}
            setPasswordError={setPasswordError}
            handleClose={handleClose}
            errorMessage={passwordErrorMessage}
          />
        </form>
      </Paper>
  );
};

export default Example;
