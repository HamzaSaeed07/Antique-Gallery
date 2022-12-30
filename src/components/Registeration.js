import "../Style/Registeration.css";
function Registeration() {
  return (
    <div class="regs">
      <div class="background">
        <div class="shape"></div>
        <div class="shape"></div>
      </div>
      <form>
        <h5>Welcome toAntique Gallery</h5>
        <label for="username">Name</label>
        <input type="text" placeholder="Enter Name" id="username" />
        <label for="username">Email</label>
        <input type="text" placeholder="Enter Email" id="useremail" />
        <label for="role">Select your role:</label>
        <select name="role" id="role">
          <option value="seller">seller</option>
        </select>
        <label for="password">Password</label>
        <input type="password" placeholder="Password" id="password" />
        <button>Sign Up</button>
        <div class="social">
          <span class="fb">
            {" "}
            <p>Already have an account? Login</p>
          </span>
        </div>
      </form>
    </div>
  );
}
export default Registeration;
