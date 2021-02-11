import React, {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Signup from "./Signup";
import Login from "./Login"
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  section:{
    width:"85%",
    display:"flex",
    flexFlow: "column",
    alignItems:"center"
  },
  imageContainer: {
    maxWidth: "350px",
    borderRadius: "5%",
    overflow: "hidden",
  },
  image: {
    width: "100%",
  },
  introduce:{
      display:"flex",
      flexFlow: "column ",
      margin: "20px 0px 0px 0px",
      "& > *": {
        fontSize: "20px",
        fontFamily: 'Nanum Myeongjo',
        lineHeight: "30px"
      }
  }
  ,
  buttonContainer: {
    padding: "20px",
    justifyContent:"center",
    display:"flex",
    width:"100%",
    "& > *": {
      margin: "0px 5px",
    }
  },
}));


const Main = () => {
  const classes = useStyles();
  const [islogin, setIslogin] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const useSignup = () =>{
      setIsSignup(true);
  }
  const useLogin = () =>{
      setIslogin(true);
  }
  return (
    <div className={classes.root}>
      <section className={classes.section}>
        <div className={classes.imageContainer}>
          <img
            className={classes.image}
            src="https://cdn.pixabay.com/photo/2021/01/28/03/13/person-5956897_1280.jpg"
          />
        </div>
        <div className={classes.introduce}>
            <span>어서오세요. Calendar List입니다!</span>
            <span>해야 할 일을 달력을 이용해서 해내보세요!</span>
        </div>
        {/* <Login open/> */}
        <Signup isSignup = {isSignup} setIsSignup = {setIsSignup} />
        <div className={classes.buttonContainer}>
          <Button name="login" variant="contained" color="primary" onClick={useLogin}>
            Login
          </Button>
          <Button name="signup" variant="contained" color="secondary" onClick={useSignup}>
            Signup
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Main;
