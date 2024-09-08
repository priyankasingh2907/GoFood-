import { Link, useNavigate } from "react-router-dom";
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
import { useState } from "react";

export default function Login() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value });
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        let result = await fetch("http://localhost:5000/api/loginuser",
            {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",

                },
                body: JSON.stringify(formData),
            });
            let data = await result.json();
            console.log(data);
            if(data.success){
                alert("User created successfully!");
                setFormData({
                    email: "",
                    password: "",
                });
                localStorage.setItem("authToken",data.authToken);
                console.log(localStorage.getItem());
                navigate("/");
                
            } else {
                alert("Error creating user!");
    }};

  return (
    <>
    <Navbar/>
    <h1 className="text-center mt-2">Sign In</h1>

<div className="container">
    <div className="row">
        <div className="col-6 offset-2">
       <div className="border m-2 p-4 shadow">
       <form onSubmit={handleSubmit} >
     
        <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input name="email" value={formData.email} onChange={handleChange} type="email" className="form-control" id="email" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text"></div>
        </div>
        <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password"  name="password" value={formData.password} onChange={handleChange} className="form-control" id="password" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text"></div>
        </div>
       
        <button type="submit" className="btn btn-dark">Submit</button>
        <Link className="m-3 btn btn-danger" to='/login'>Not a User</Link>

        </form>
       </div>
        </div>
    </div>
</div>

    <Footer/>
    </>
  )
}
