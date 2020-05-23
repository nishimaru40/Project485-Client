import React from "react";

const SignIn = ()=> {
    
        return (
            <form class="SignIn" >
                <h3>เข้าสู่ระบบ</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button><br></br>
                <p className="forgot-password text-right">
                    ลืม <a href="#">password?</a><br></br>
                    ยังไม่เคยสมัคร <a href="/signUp">sign up?</a>
                </p>
            </form>
        )
    
}


export default SignIn;