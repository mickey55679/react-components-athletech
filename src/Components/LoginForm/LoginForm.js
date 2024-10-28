import { FaUser, FaLock } from "react-icons/fa";
import './LoginForm.css';

function LoginForm() {
  return (
    <div className="login-container">
      <div className="wrapper">
        <form action="">
          <h1>Login</h1>
          <div className="input-box">
            <input type="text" placeholder="Username" required />
            <FaUser />
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" required />
            <FaLock />
          </div>

          <div className="remember-forgot">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <a href="#">Forgot password?</a>
          </div>

          <button type="submit">Login</button>
          <div className="register-link">
            <p>
              Don't have an account? <a href="#">Register</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
export default LoginForm;
