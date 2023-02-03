import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../css/home.css'

export default function Storie(){
    const navigate=useNavigate()
   
    let loger=JSON.parse(localStorage.getItem('form'))
    console.log(loger)
    let data=JSON.parse(localStorage.getItem('list'))
    const [updateList,setUpdateList]=useState(JSON.parse(localStorage.getItem('list') || "[]"))
    // let userLoger=''
    
    
        // if(loger===null){
        //     console.log('nnnn')
                
                
        //     }
            
        // if(loger.email!==""){
        //     navigate('/login')
        //     userLoger=loger.email
        // }else{
            // useEffect(()=>{
            //     navigate('/login')
            // })
            // navigate('/login')
            // console.log('li pa bon')
        // }
    
    function limit(str, limit, end) {

        limit = (limit)? limit : 100;
        end = (end)? end : '...';
        str = str.split(' ');
        
        if (str.length > limit) {
          var cutTolimit = str.slice(0, limit);
          return cutTolimit.join(' ') + ' ' + end;
        }

        return str.join(' ');
      }
      const truncat = (string, length, ) => {
        return string.length < length ? string : string.substring(0, length) 
    }

    const truncat2 = (string, length, end="...") => {
        return string.length < length ? string : string.substring(0, length) +end
    }
console.log(updateList)

    const Delete=(idx)=>{
        console.log('mw an delete')
        const updateIstwa=updateList.filter((elem,id)=>{
            console.log(idx!==id)
            return idx!==id
        })
        setUpdateList(updateIstwa)
        localStorage.setItem('list',JSON.stringify(updateList))
    }



    let verified
    if(data){
        if(data.tit!==""){
            verified=  
                data.filter((itilizate)=>itilizate.user===loger.email)
                .map((all,key)=>
                {
                    if(all.tit!==""){
                        return <>
                        <div className="card" key={key} >
                            <div className="box">
                                <div className="content">
                                <h4 style={{color:'white'}}>Author: {truncat(all.user,4)}</h4>
                                <h4 style={{color:'white'}}>Tittle: {truncat2(all.tit,8)}</h4>
                                
                                <p>{limit(all.istwa,3)}</p>
                                <li><Link to={`/stori/read/${all.tit}`}>Read More </Link></li>
                                <button onClick={()=>Delete(key)}>Delete</button>
                                <li><Link to={`/edit/${key}`}>Edit </Link></li>
                                {/* <li><Link to={`/stori/read/${all.tit}`}>Edit </Link></li> */}
                            </div>
                        </div>
            </div>
                        </>
                    }
                }
                )
                            
        }else{
            verified=<></>
        }
    }else{
        console.log('gyet')
    }
    

   
    

    return (
        <>
        <h3>add another story 👉<Link to='/stories/add-new'>new_Storie</Link></h3>
        <div className="container">
               {verified}
       
            </div>
        {/* <h3>add nouvo stori <Link to='/stories/add-new'>new_Storie</Link></h3> */}
        
        </>
    )
}