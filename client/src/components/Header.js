import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const useTitle = () => {
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      const { current } = element;
      current.style.textAlign = "center";
      current.style.fontSize = `45px`;
    }
  }, []);
  const triggerHover = () => {
    if (element.current) {
      const { current } = element;
      current.style.color = "green";
      current.style.fontSize = "60px";
      current.style.margin = "0px";
      current.style.transition = `2s ease-in-out`;
    }
  };
  const removeTrigger = () => {
    if (element.current) {
      const { current } = element;
      current.style.color = "black";
      current.style.fontSize = "45px";
      current.style.margin = "";
    }
  };
  return {
    ref: element,
    onMouseOver: triggerHover,
    onMouseLeave: removeTrigger,
  };
};

const comparePath = (pathname) =>{
    if(pathname === "/"){
        return {
            isHome: true
        }
    }else{
        return {
            isHome: false
        }
    }
}

const Header = ({pathname}) => {
  const title = useTitle();
  const isHome = comparePath(pathname);
  console.log(isHome);
  return (
    <div>
      {
          isHome ?(<Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <h1 {...title}>Calendar List</h1>
        </Link>) : "틀림"
      }
    </div>
  );
};
export default Header;
