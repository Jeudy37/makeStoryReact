
import { useEffect, useState } from "react"
import { Link, Outlet } from "react-router-dom"
import "../css/layout.css"
export default function Layout(){

  const[isLogged,setLogged]=useState(false)
  
    
    // console.log(form)
    // if(form===null){
    //   console.log('kk')

    // }
    useEffect(()=>{
      let form =JSON.parse(localStorage.getItem('form'))
      if(form===null){
        setLogged(true)
      }else{
        setLogged(false)
      }
    },[])
    let btn
    if(isLogged===true){
      btn= <li className="nav-link"><Link to="/login">Login👥</Link> </li>
          
        
      }else{
        console.log('shit')
        btn =  <li className="nav-link"><Link to='/stories/add-new'>new_Storie🔒</Link></li>
    }
    // else{
    //   console.log('danm')
    // }
      
   
    return(
      <div style={{marginTop:"400px"}}>
     <nav className="nav">
     <li className="nav-link"><Link to="/">Home</Link> </li>
     <li className="nav-link"><Link to="/about">About</Link> </li>
     <li className="nav-link"><Link to="/stories">Stories🔒</Link> </li>
     {/* <li className="nav-link"><Link to='/stories/add-new'>new_Storie🔒</Link></li> */}
      {btn}

      
    </nav>

      <Outlet/>
        </div>
    )
}