import "../styles/theme.css";
import "../styles/common.css";

function RegisterFoodPartner() {
  return (
    <div className="form-container">
      <h1>Register as Food Partner</h1>
      <form>
        <label htmlFor="partnerName">Partner Name</label>
        <input type="text" id="partnerName" name="partnerName" placeholder="Enter your name" />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" placeholder="Enter your password" />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegisterFoodPartner;