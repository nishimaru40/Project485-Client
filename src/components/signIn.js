import React, { useState } from 'react';

const SignIn = () => {



    const initialFormData = {
        email: "",
        password: ""
    };

    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [formData, updateFormData] = useState(initialFormData);

    const emailChange = (e) => {
        setEmail(e.target.value);
    };

    const passChange = (e) => {
        setPass(e.target.value);
    };

    const handleSubmit = (e) => {
        updateFormData({
            email: email,
            password: pass
        })
        e.preventDefault()
        console.log(formData);
        // ... submit to API or something

        fetch('/api/user/signIn', {
            method: 'POST',
            body: JSON.stringify(formData),
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
        <form class="signIn" onSubmit={handleSubmit}>
            <h3>เข้าสู่ระบบ</h3>

            <div className="form-group">
                <label>Email address</label>
                <input type="email" className="form-control" placeholder="Enter email"
                    onChange={emailChange} />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password"
                    onChange={passChange} />
            </div>

            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                </div>
            </div>

            <button type="submit" className="btn btn-primary btn-block" onClick={handleSubmit}
            >Submit</button><br></br>
            <p className="forgot-password text-right">
                ลืม <a href="#">password?</a><br></br>
                    ยังไม่เคยสมัคร <a href="/signUp">sign up?</a>
            </p>
        </form>
    )

}

export default SignIn;