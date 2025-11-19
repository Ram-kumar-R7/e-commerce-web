import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const Login = () => {
  let { userName } = useParams();
  let navigate = useNavigate();
  const handleclick = () => {
    navigate("/");
  };

  return (
    <>
      Login - {userName}
      <button onClick={handleclick}> Move to Home</button>
    </>
  );
};

export default Login;
