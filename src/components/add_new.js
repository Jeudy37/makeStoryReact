import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import Storie from '../pages/stories'
import '../css/add_new.css'
// import Home from '../pages/home'

export default function AddNew() {
    const form=JSON.parse(localStorage.getItem('form')) ?JSON.parse(localStorage.getItem('form')):""
    const navigate=useNavigate()
    useEffect(()=>{
        if(form===null)
        navigate('/')
    })

    useEffect(()=>{
        if(form.email==="")
        navigate('/login')
        
    })
    console.log(form)
    // if(form==null){
    //     console.log('ttt')
    //     // navigate('/login')
    // }
    const [formIstwa,setForrmIstwa]=useState({
        tit:'',
        istwa:"",
        status:"",
        user:form.email
    })

    const [list, setList]=useState(JSON.parse(localStorage.getItem('list') || "[]"))

    const change =(e)=>{
        setForrmIstwa({
            ...formIstwa,
            [e.target.id]:e.target.value
        })
    }
    
    
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(formIstwa)
    
        if(formIstwa){
            setList([...list,formIstwa])
            setForrmIstwa({
                
                tit:'',
                istwa:"",
                status:"",
                user:form.email}
                )

            
        }
    }

    useEffect(()=>{
        localStorage.setItem('list',JSON.stringify(list))
    },[list])

return (
    
        <div style={{backgroundColor:"rgb(30,30,40)"}}>
            <form onSubmit={handleSubmit}>
                <p style={{fontSize:"17px",color:"white"}}>Tell your story here ,don't make a big deal out of it👋</p>
                <input id='tit'  name='tit' placeholder='title of the storie' type="text" className="feedback-input" value={formIstwa.tit} onChange={change}></input> 
                <textarea name='istwa' placeholder='put your storie there...' type='text' id="istwa" className="feedback-input" value={formIstwa.istwa} onChange={change}></textarea>
                <label style={{color:"white"}}>Tap visible or none</label>
                <input id='status'  name='status' placeholder='choose to make visible ur storie for all or not ' type="text" className="feedback-input" value={formIstwa.status} onChange={change}></input> 

                <input type="submit"  value="Add new storie"/>
            </form>
            
        </div>    
   
)
}
