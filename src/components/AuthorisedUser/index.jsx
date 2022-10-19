import React, {useState} from "react";
import "./style.css";
import cross from "bootstrap-icons/icons/x.svg";

const App = () => {
    return (
      <>
        <Footer />
      </>
    );
  };
  


export default ({curUser, setCurUser}) => {
    return <>
        <div>{curUser}</div>
        <button onClick={() => {localStorage.setItem("curUser", ""); setCurUser("");}}>Выйти</button>
    </>
}
