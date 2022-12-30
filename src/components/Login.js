import "../Style/Login.css"
function Login(){
    return(
<div>
    <div class="background">
        <div class="shape"></div>
        <div class="shape"></div>
    </div>
    <form>
        <h3>Login</h3>

        <label for="usermail">Email</label>
        <input type="email" placeholder="Enter your Email" id="usermail"/>

        <label for="password">Password</label>
        <input type="password" placeholder="Password" id="password"/>

        <button>Log In</button>
        <div class="social">
        <span class="fb"> <p>Don't have an account? Sign Up</p></span>
        </div>
        </form>
</div>
    )

}
export default Login