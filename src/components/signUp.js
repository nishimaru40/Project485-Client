import React, { useState } from "react";

const SignUp = () => {

    const initialFormData = {
        username: "",
        email: "",
        password: ""
    };

    const [uname, setUname] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [formData, updateFormData] = useState(initialFormData);

    const unameChange = (e) => {
        setUname(e.target.value);
    };

    const emailChange = (e) => {
        setEmail(e.target.value);
    };

    const passChange = (e) => {
        setPass(e.target.value);
    };

    const handleSubmit = (e) => {
        updateFormData({
            username: uname,
            email: email,
            password: pass
        })
        e.preventDefault()
        console.log(formData);
        // ... submit to API or something

        fetch('/api/user/signUp', {
            method: 'POST',
            body: JSON.stringify({
                username: uname,
                email: email,
                password: pass
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
            })
        }).then(res => res.json())
            .catch(error => {
                console.error('Error:', error);
            })
            .then(res => {
                console.log('Success:', res);
            })

    };

    return (
        <form class="SignUp" onSubmit={handleSubmit}>
            <h3>สมัครสมาชิก</h3>

            <div className="form-group">
                <label>User name</label>
                <input type="text" className="form-control" placeholder="User name" onChange={unameChange} />
            </div>

            <div className="form-group">
                <label>Email address</label>
                <input type="email" className="form-control" placeholder="Enter email" onChange={emailChange} />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" onChange={passChange} />
            </div>

            <button type="submit" className="btn btn-primary btn-block">Sign Up</button><br></br>
            <p className="forgot-password text-right">
                เคยสมัครแล้ว <a href='/signIn'>เข้าสู่ระบบ?</a>
            </p>
        </form>
    )

}

export default SignUp;