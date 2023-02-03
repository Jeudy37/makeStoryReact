import '../css/add_new.css'
import React, { useState } from 'react'
import {  useNavigate, useParams } from 'react-router-dom'
import {reactLocalStorage} from 'reactjs-localstorage'
export default function Edit() {
    // const userr=reactLocalStorage.get('form')
    const allStorie=reactLocalStorage.get('list')?reactLocalStorage.getObject('list'):[]
    const [previous,setPrevious]=useState(allStorie)
    const [list, setList]=useState(JSON.parse(localStorage.getItem('list') || "[]"))
    const {id} =useParams()
    const navigate=useNavigate()
    console.log(previous)
    console.log(id)
    let tit=allStorie[id].tit
    let istwa=allStorie[id].istwa
    let status=allStorie[id].status
    let user=allStorie[id].user

    const [edit,setEdit]=useState({
        tit:tit,
        istwa:istwa,
        status:status,
        user:user
     } )
console.log(allStorie[id])
     const Changing=(event)=>{
        setEdit({...edit,[event.target.id]:event.target.value})
     }
     
     const submit=(e)=>{
        e.preventDefault()
        setPrevious(previous[id]=edit)
        setList(list[id]=edit)
        console.log(list)
        setEdit({
                
            tit:'',
            istwa:"",
            status:"",
            user}
            )
            reactLocalStorage.set('list',JSON.stringify(list))
            navigate('/stories')
     }
     
  return (
    <div style={{backgroundColor:"rgb(30,30,40)"}}>
        <form onSubmit={submit}>
                <p style={{fontSize:"17px",color:"white"}}>Make your story better with some modifications👋</p>
                <input id='tit'  name='tit' placeholder='title of the storie' type="text" className="feedback-input" value={edit.tit} onChange={Changing}></input> 
                <textarea name='istwa' placeholder='put your storie there...' type='text' id="istwa" className="feedback-input" value={edit.istwa} onChange={Changing}></textarea>
                <label style={{color:"white"}}>Tap visible or none</label>
                <input id='status'  name='status' placeholder='choose to make visible ur storie for all or not ' type="text" className="feedback-input" value={edit.status} onChange={Changing}></input> 

                <input type="submit"  value="Add new storie"/>
            </form>
    </div>
  )
}
