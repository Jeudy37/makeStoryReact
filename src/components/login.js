import { useEffect, useState } from 'react';
import '../css/login.css'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
// import AddNew from './add_new';
export default function Login({setAuth}){
    const[data,setData]=useState(null);
    const [error,setError]=useState(null);
    const navigate=useNavigate()

    const[form,setForm]=useState({
            email:"",
            password:""
    });
    
        const Change=(e)=>{
            setForm({
                ...form,
                [e.target.id]:e.target.value
            });
        };
    
        const Submition= async(e)=>{
            e.preventDefault()
            try{
                const reponse= await axios.post(`https://api.escuelajs.co/api/v1/auth/login`,form)
                console.log('li pase')
                navigate('/stories/add-new',)
                // document.location.reload()
            }catch(err){
                setError(err)
            }
        }
        
        useEffect(()=>{
            localStorage.setItem('form',JSON.stringify(form))
            // document.location.reload()
        },[form])
        
    return (
        <div>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",minHeight: "100vh",backgroundColor:"#060c21"}}>
            
            <form onSubmit={Submition} method="post">
            <div className="form">
            <h2>Login</h2>
            <div className="input">
                <div className="inputBox">
                    <label for="">Email</label>
                    <input onChange={Change} type="text" id="email" name="email" value={form.email} placeholder="email" />
                </div>
                <div className="inputBox">
                    <label for="">Password</label>
                    <input onChange={Change} type="password" id="password" name="password" value={form.password}  placeholder="Password" />
                </div>
                <div className="inputBox">
                    <input type="submit" name="" value="Sign In"/> 
                </div>
            </div>
            
        </div>
            </form>
    </div>
        </div>
    )
}