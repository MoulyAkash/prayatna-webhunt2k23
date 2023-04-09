import React, { useRef, useState } from "react";
import { useAlert } from "react-alert";
import { useNavigate } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";
import { TbLock, TbMail, TbUser } from "react-icons/tb";
import Button from "../components/Button";
import Dropdown from "../components/Dropdown/Dropdown";

import APIService from "../api/Service";
import TextInput from "../components/TextInput";
import {
  equalsIgnoreCase,
  validateAlphabet,
  validateEmail,
  validatePassword,
} from "../utils";

export default function Registration() {
  const alert = useAlert();
  const navigate = useNavigate();
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    username: "",
    password: "",
  });

  const playerRef = useRef(null);
  return (
    <div className="login-page">
      <div className="login-container">
        <div className="image">
          <Player
            onEvent={(event) => {
              if (event === "loop") playerRef?.current?.setSeeker(43, true);
            }}
            src="https://assets1.lottiefiles.com/packages/lf20_jcikwtux.json"
            loop
            autoplay
            ref={playerRef}
          />
        </div>
        <div className="login-wrapper">
          <div className="title">We are glad to have you!</div>
          <TextInput
            icon={<TbMail />}
            placeholder="Email"
            value={userCredentials.email}
            onChange={(e: string) =>
              setUserCredentials((old) => ({ ...old, email: e }))
            }
            errorText="Invalid Email"
            validateWith={validateEmail}
          />
          <TextInput
            icon={<TbUser />}
            placeholder="Username"
            value={userCredentials.username}
            onChange={(e: string) =>
              setUserCredentials((old) => ({ ...old, username: e }))
            }
            errorText="Invalid Username"
            validateWith={validateAlphabet}
          />
          <TextInput
            icon={<TbLock />}
            type="password"
            placeholder="Your Password"
            value={userCredentials.password}
            onChange={(e: string) =>
              setUserCredentials((old) => ({ ...old, password: e }))
            }
            errorText="Password must atleast have one uppercase, one lowercase, one number, one special character and be 8 characters long"
            validateWith={validatePassword}
          />
          <div className="login-forgot-wrapper">
            <div className="forgot-password" onClick={() => navigate("/")}>
              Already registered? Login
            </div>
            <div className="forgot-password">Forgot Password?</div>
          </div>
          <div
            className="login-button"
            onClick={async () => {
              if (
                validateAlphabet(userCredentials.username) &&
                validateEmail(userCredentials.email) &&
                validatePassword(userCredentials.password)
              ) {
                alert.success("Registration Successful");
                setTimeout(() => navigate("/dashboard"), 2000);
              } else {
                alert.error("Invalid Credentials");
              }
            }}
          >
            Register
          </div>
        </div>
      </div>
    </div>
  );
}
