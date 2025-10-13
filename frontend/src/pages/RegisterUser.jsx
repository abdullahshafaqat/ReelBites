import "../styles/theme.css";
import "../styles/common.css";

function RegisterUser() {
    const handleSubmit = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        console.log(name);
        
        const email = event.target.email.value;
      };

        return (
    <div className="form-container">
      <h1>Register as User</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" placeholder="Enter your name" />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" placeholder="Enter your password" />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegisterUser;