import React from "react";

const signUp = ()=> {
    
        return (
            <form class="SignUp">
                <h3>สมัครสมาชิก</h3>

                <div className="form-group">
                    <label>User name</label>
                    <input type="text" className="form-control" placeholder="User name" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button><br></br>
                <p className="forgot-password text-right">
                    เคยสมัครแล้ว <a href='/signIn'>เข้าสู่ระบบ?</a>
                </p>
            </form>
        )
    
}

export default signUp;