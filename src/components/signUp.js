import React, {useState, useEffect} from "react";

const SignUp = ()=> {

    // const test = {
    //     username:"dasdasdwr",
	//     email:"patrapsde@gmail.com",
	//     password:"12345678"
    // }

    const initialFormData = Object.freeze({
        username: "",
        email: "",
        password: ""
    });

    const [formData, updateFormData] = useState(initialFormData);

    const handleChange = (e) => {
        updateFormData({
            ...formData,
      
            // Trimming any whitespace
            [e.target.name]: e.target.value.trim()
        });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData);
        // ... submit to API or something

        fetch('/api/user/signUp', {
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
            <form class="SignUp"onSubmit={handleSubmit}>
                <h3>สมัครสมาชิก</h3>

                <div className="form-group">
                    <label>User name</label>
                    <input type="text" className="form-control" placeholder="User name" onChange={handleChange}/>
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email"onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" onChange={handleChange}/>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button><br></br>
                <p className="forgot-password text-right">
                    เคยสมัครแล้ว <a href='/signIn'>เข้าสู่ระบบ?</a>
                </p>
            </form>
        )
    
}

export default SignUp;