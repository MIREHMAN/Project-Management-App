import "./LoginForm.css";
import { useState } from "react";

const PasswordErrorMessage = () => {
  return (
    <p className="FieldError">Password should have at least 8 characters</p>
  );
};

function RegistrationForm() {
  const [email, setEmail] = useState("");
  const[user,setUser]=useState(false);
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });

  const getIsFormValid = () => {
    return password.value.length >= 8;
  };

  function isCredentialsValid() {
    const ValidEmail = "Inammalik73@gmail.com";
    const ValidPassword = "Malik005";
    return( 
    (email === ValidEmail && password === ValidPassword));
  }

  const clearForm = () => {
    setEmail("");
    setEmail("");
    setPassword({
      value: "",
      isTouched: false,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(isCredentialsValid);
    clearForm();
  };

  const Welcome = () => {
    return (
      <h2>Welcome User {email}</h2>
    );
  };
  const Error = () => {
    return (
      <p className="FieldError">Login Failed</p>
    );
  };

  return (
    <div className="Registrartion">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Sign Up</h2>

          <div className="Field">
            <label>
              Email address <sup>*</sup>
            </label>
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Email address"
            />
          </div>
          <div className="Field">
            <label>
              Password <sup>*</sup>
            </label>
            <input
              value={password.value}
              type="password"
              onChange={(e) => {
                setPassword({ ...password, value: e.target.value });
              }}
              onBlur={() => {
                setPassword({ ...password, isTouched: true });
              }}
              placeholder="Password"
            />
            {password.isTouched && password.value.length < 8 ? (
              <PasswordErrorMessage />
            ) : null}
          </div>

          <button type="submit" disabled={!getIsFormValid()}>
            Login
          </button>
        </fieldset>
      </form>
      <div>
        {user?<Welcome/>:<Error/>}
      </div>
    </div>
    
  );
}

export default RegistrationForm;
