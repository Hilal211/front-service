import "./Login.css"
import img from '../image/features-3.png'
export default function Login() {
    return (
        <section class="sign-in">
            <div class="containerl">
                <div class="signin-content">
                    <div class="signin-image">
                        <figure class="figurel"><img class="imgl" src={img} alt="sing up image"/></figure>
                        <a class="linkLogin" href="#" class="signup-image-link">Create an account</a>
                    </div>

                    <div class="signin-form">
                        <h2 class="titlel" class="form-title">Sign up</h2>
                        <form method="POST" class="register-form" id="login-form">
                            <div class="form-group">
                                <label class="labell" for="your_name"><i class="iconl bi bi-person-fill"></i></label>
                                <input class="inputl"   type="text" name="your_name" id="your_name" placeholder="Your Name"/>
                            </div>
                            <div class="form-group">
                                <label class="labell" for="your_pass"><i class="iconl bi bi-shield-lock-fill"></i></label>
                                <input class="inputl"  type="password" name="your_pass" id="your_pass" placeholder="Password"/>
                            </div>
                            {/* <div class="form-group">
                                <input class="inputl"  type="checkbox" name="remember-me" id="remember-me" class="agree-term" />
                                <label class="labell" for="remember-me" class="label-agree-term"><span><span></span></span>Remember me</label>
                            </div> */}
                            <div class="">
                                <input class="inputl"  type="submit" name="signin" id="signin" class="fbtn btn-primary w-50 loginb" value="Log in"/>
                            </div>
                        </form>
                      
                    </div>
                </div>
            </div>
        </section>
    );

}