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
import Alert from '@material-ui/lab/Alert';

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
    display:'flex',
    flexFlow: 'wrap',
    alignItems:'center',
    "& > *": {
      margin: '8px auto',
      width: "300px",
    },
  },
  header:{
    textAlign:'center'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  paper: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: 'center',
    width: theme.spacing(46),
    margin: "0 auto",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(50),
      height: theme.spacing(88),
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
    //원래는 passwordError의 boolean 값에 따라서 addMembership을 조정하려고 했으나 ModalBox에서만 값이 바뀌고
    // 여기서는 passwordError의 값이 변화가 없고 계속 false값만 내놓는다.
    //그래서 그냥 아예 먼저 comparePassword 안에서 조건을 걸어서 addMembership을
  };

  const comparePassword = () => {
    if (userPassword !== passwordCheck) {
      console.log('안돼요');
      return setPasswordError(true);
    } else {
      console.log('이제 보내집니다.')
      addMembership();
    }
  };
  const addMembership = () => {
    axios
      .post("/api/member", {
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
          // noValidate 이것을 사용하면 오류가 안 뜬다. 즉, required가 적용 안된다.
          autoComplete="off"
        >
          <h1 className={classes.header}>회원가입</h1>
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
          <Alert severity="error">This is an error alert — check it out!</Alert>
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
          <FormControl className={classes.formControl} required>
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
