import React from "react";
import { Link } from "react-router-dom";

export default function Form() {
  return (
    <form className="signIn-form">
      <Link to={"/"}>
        <h2>RecipeCurious</h2>
      </Link>
      <h1>Sign in or create an account</h1>
      <div className="input-sect column">
        <label htmlFor="email">Email address</label>
        <input type="email" name="email" id="email" />
      </div>
      <button>Continue with Email</button>
    </form>
  );
}
