// Sourced from https://www.geeksforgeeks.org/how-to-develop-user-registration-form-in-reactjs/

import { useState } from "react";
import React from "react";
// import users from "../../../Server/controllers/user_controller";
// import "../src/App.css";
// import Form from 'react-bootstrap/Form';
// import { Container } from 'react';
// import { Link } from "react-router-dom"
// const PG_URI = process.env.PG_URI

function Register() {
  // States for registration
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user_location, setLocation] = useState("");
  // const [credentials, setCredentials] = useState({
  //   email: "",
  //   password: "",
  // });

  // const [bio, setBio] = useState('');
  //bio is not on original site
  // const [profile_pic, setProfile_pic] = useState('');
  //need to add autocomplete for join_date and add this to the form

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  // const error =false;

  // Handling the username change
  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };

  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };

  // Handling the credential change
  // const handleCredentials = (e) => {
  //   setCredentials(e.target.value);
  //   setSubmitted(false);
  // };

  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  // Handling the location change
  const handleLocation = (e) => {
    setLocation(e.target.value);
    setSubmitted(false);
  };

  // Handling the bio change
  // const handleBio = (e) => {
  //     setBio(e.target.value);
  //     setSubmitted(false);
  // };

  // Handling the profile_pic change
  // const handleProfile_pic = (e) => {
  //     setProfile_pic(e.target.value);
  //     setSubmitted(false);
  // };
// const [user, setUser] = useState({
//   username:'',
//   email:'',
//   password:'',
//   user_location:'',
// })

  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "" || email === "" || 
    password === "" 
    ) {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
    }
  };

  //SUBMIT FORM Tammy added on 10/22
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      // const localHost=process.env.PG_URI;
      const body = { username, email, password, user_location } ;
      const response = await fetch(`http://localhost:5000/users/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
        // setSubmitted(true);
      }      );

      console.log("response = " + response + ", strigified body =" + JSON.stringify(body));
    } catch (error) {
      console.error(errorMessage);
    }
  };

  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? "" : "none",
        }}
      >
        <h1>User {username} has successfully registered!!</h1>
      </div>
    );
  };

  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? "" : "none",
        }}
      >
        <h1>Please enter all the fields</h1>
      </div>
    );
  };

  return (
    <div className="form">
      <div>
        <h1>Sign Up Now!</h1>
      </div>

      {/* Calling to the methods */}
      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>
      <div>
        <form className="form" onSubmit={onSubmit}>
          {/* Labels and inputs for form data */}
          <div>
            {/* change this variable to Name */}
            <label className="label">Your name</label>
            <input
              onChange={handleName}
              className="forminputs"
              id="username"
              value={username}
              required
              autoComplete="name"
              type="text"
            />
          </div>
          <div id="email-error" className="text-alertRed mt-1 ds-dont-tiny">
            {/* <span class="sr=only">"Error:"
            "&nbsp;"==0</span> */}
            <label className="label">Email address</label>
            <input
              onChange={handleEmail}
              className="forminputs"
              value={email} required
              // onChange={(e) =>
              //   setCredentials({ ...credentials, email: e.target.value })
              // }
              id="email"
              name="email"
              type="email"
              placeholder="Example@email.com"
              autoComplete="email"
            />
          </div>

          <div>
            <label className="label">Password</label>
            <input
              onChange={handlePassword}
              className="forminputs"
              value={password} required
              // onChange={(e) =>
              //   setCredentials({ ...credentials, password: e.target.value
              //   })
              // }
              id="new-password"
              name="password"
              type="password"
              autoComplete="new-password"
            />
            {/* <button type="button" class="absolute w-5 h-6" title="Show password" aria-label="Show password button" data-element-name="show-or-hide-password-btn" ></button> */}
          </div>

          <div>
            <label className="label">Location</label>
            <input
              onChange={handleLocation}
              className="forminputs"
              value={user_location}
              id="user_location"
              type="text"
              autoComplete="off"
              placeholder="Neighborhood or City or zip code"
            />
          </div>
          {/* <div>
                    <label className="label">Bio</label>
                    <input onChange={handleBio} className="forminputs"
                    value={bio} type="bio" />
                  </div> */}
          {/* <div>
                    <label className="label">Profile Pic</label>
                    <input onChange={handleProfile_pic} className="forminputs"
                    value={profile_pic} type="file" />
                  </div> */}
          <div>
            <span>
              <label className="label">Age</label>
              <p>
                <input type="checkbox" />
                <small> I am 18 years of age or older.</small>
              </p>
            </span>
          </div>
          <button onClick={handleSubmit} className="btn sign-up" type="submit">
            Sign up
          </button>
        </form>
      </div>
      <div className="center">
        <p>
          <small>
            By signing up, you agree to <a href="/">Terms of Service</a>,{" "}
            <a href="/">Privacy Policy</a>, and
            <a href="/"> Cookie Policy </a>
          </small>
        </p>

        <p>
          Already a member? <a href="/">Log In</a>
        </p>
      </div>
    </div>
  );
  // {console.log({username})}
}

export default Register;
