import "./Login.css";
import { useState } from "react";
export const ERROR_MESSAGES = {
  email: "Please enter a valid e-mail address.",
  password:
    "The password must be at least 8 characters long and include an uppercase letter, a lowercase letter, a number, and a special character.",
};
function Login({onLoginSuccess}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isChecked, setIsChecked] = useState(false);
  
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const isEmailValid = emailRegex.test(email);
    const isPasswordValid = passwordRegex.test(password);
    const isFormValid = isEmailValid && isPasswordValid && isChecked;

    function handleChange(e) {
        const { id, type, value, checked } = e.target;
        const inputValue = type === "checkbox" ? checked : value;

        if(id === "email") {
            setEmail(inputValue)
        }else if(id === "password") {
            setPassword(inputValue)
        }else {
            setIsChecked(inputValue)
        }

    }

    function handleSubmit(e) {
        e.preventDefault()

        if(!isFormValid) return

        onLoginSuccess(email);

    }
  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        value={email}
        className="email-input"
        id="email"
        onChange={handleChange}
        required
      />
      {email.length > 0 && !isEmailValid && (
        <p className="error-message">{ERROR_MESSAGES.email}</p>
      )}

      <label htmlFor="password">Password</label>
      <input
        type="password"
        value={password}
        className="password-input"
        id="password"
        onChange={handleChange}
        required
      />
      {password.length > 0 && !isPasswordValid && (
        <p className="error-message">{ERROR_MESSAGES.password}</p>
      )}

      <label htmlFor="check">
        <input type="checkbox" checked={isChecked} id="check" onChange={handleChange} required />I agree
        with statements
      </label>

      <button type="submit" disabled={!isFormValid}>Log In</button>
    </form>
  );
}
export default Login;
