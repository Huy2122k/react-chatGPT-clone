import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import SvgComponent from "../components/SvgComponent";

const Login = () => {
  const [isSignupFormVisible, setIsSignupFormVisible] = useState(false);

  const navigate = useNavigate();

  const handleClick = async (purpose) => {
    if (purpose === "signup") {
      setIsSignupFormVisible(true);
    }
    if (purpose === "login") {
      navigate("/login");
    }
  };

  return (
    <>
      {!isSignupFormVisible ? (
        <div className="loginContainer">
          <div className="loginContainerContent">
            <SvgComponent w={50} h={50} />
            <h1>Welcome to Talkbot</h1>
            <p>Your Ultimate AI Assistant</p>
            <div className="loginButtonWrapper">
              <Button text="Log in" handleClick={() => handleClick("login")} />
              {/* <Button
                text="Sign up"
                handleClick={() => handleClick("signup")}
              /> */}
            </div>
          </div>
        </div>
      ) : (
        // <SignupForm />
        ""
      )}
    </>
  );
};

export default Login;
