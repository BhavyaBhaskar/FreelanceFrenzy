/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "./LoginSignupPage.css";
import supabase from "../supabase";

import { useEffect, useRef, useState } from "react";

function LoginSignupPage({ setIsLogin }) {
  const [formType, setFormType] = useState("login");
  let query;

  useRef(function () {
    async function getFacts() {
      query = await supabase.from("User").select("*");
      //   console.log(query);
    }
    getFacts();
  }, []);

  async function getFacts() {
    query = await supabase.from("User").select("*");
    //   console.log(query);
  }

  const handleFormToggle = () => {
    setFormType((prevFormType) =>
      prevFormType === "login" ? "signup" : "login"
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your authentication logic here (e.g., API calls, form validation)

    // For demonstration purposes, just log the form data
    console.log("Form submitted:", formType, formData);
  };

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = async (data) => {
    if (formType === "login") {
      await getFacts();
      console.log(query);
      if (
        (query.data[0].EmailID === formData.email) &
        (query.data[0].PassWord === formData.password)
      ) {
        setFormData({ email: "", password: "", confirmPassword: "" });
        setIsLogin(true);
      }
    }
    if (formType !== "login") {
      console.log(formData);
      await supabase
        .from("User")
        .insert([{ EmailID: data.email, PassWord: data.password }])
        .select();
      setFormData({ email: "", password: "", confirmPassword: "" });
    }
  };

  return (
    <>
      <div className="wrapper">
        <img
          src="public\FullLogo.jpg"
          style={{
            height: "200px",
            marginLeft: "100px",
          }}
        />
        <div className="title-text">
          <div className={`title ${formType === "login" ? "login" : "signup"}`}>
            {formType === "login" ? "Login Form" : "Signup Form"}
          </div>
        </div>
        <div className="form-container">
          <div className="slide-controls">
            <input
              type="radio"
              name="slide"
              id="login"
              checked={formType === "login"}
              onChange={() => setFormType("login")}
            />
            <input
              type="radio"
              name="slide"
              id="signup"
              checked={formType === "signup"}
              onChange={() => setFormType("signup")}
            />
            <label
              htmlFor="login"
              className={`slide login ${
                formType === "login" ? "selected" : ""
              }`}
              onClick={() => setFormType("login")}
            >
              Login
            </label>
            <label
              htmlFor="signup"
              className={`slide signup ${
                formType === "signup" ? "selected" : ""
              }`}
              onClick={() => setFormType("signup")}
            >
              Signup
            </label>
            <div className="slider-tab"></div>
          </div>
          <div className="form-inner">
            <form onSubmit={handleSubmit} className={formType}>
              <div className="field">
                <input
                  type="text"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="field">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
              </div>
              {formType === "signup" && (
                <div className="field">
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              )}
              <div className="field btn">
                <div className="btn-layer"></div>
                <input
                  type="submit"
                  value={formType === "login" ? "Login" : "SignUp"}
                  onClick={() => handleLogin(formData)}
                />
                {/* <input type="submit" value={formType !== "login" && "SignUp"} /> */}
              </div>
            </form>
            <div className="signup-link">
              {formType === "login" ? "Not a member? " : "Already a member? "}
              <span className="link" onClick={handleFormToggle}>
                {formType === "login" ? "Signup now" : "Login"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginSignupPage;
