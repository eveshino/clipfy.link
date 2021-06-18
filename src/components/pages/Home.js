import logo from "../../logo.svg";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="green-container">
      <img src={logo} className="app-logo" alt="logo" />
      <p className="logoName">Clipfy.link</p>
      <p className="mainpageTitle">
        複数のリンクを
        <br />
        誰にでも共有 ログイン
      </p>
      <div className="buttons">
        <Link to="/aiyu1002" className="sign-in-button">
          <p>Aiyu</p>
        </Link>
        {/* <Link to="/Register" className="sign-in-button">
          <p>新規会員登録</p>
        </Link> */}
      </div>
      <div className="mainpageImg"></div>
    </div>
  );
};

export default Home;
