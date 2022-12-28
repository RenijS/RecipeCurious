import React, { useState } from "react";

export default function Form() {
  return (
    <form className="signIn-form">
      <h2>RecipeCurious</h2>
      <h1>Sign in or create an account</h1>
      <div className="input-sect">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
      </div>
    </form>
  );
}
