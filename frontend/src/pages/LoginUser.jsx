import "../styles/theme.css";
import "../styles/common.css";

function LoginUser() {
  return (
    <div className="form-container">
      <h1>Login as User</h1>
      <form>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" placeholder="Enter your password" />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginUser;