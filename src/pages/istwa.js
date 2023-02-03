import React from 'react';
import { useParams } from 'react-router-dom';
import '../css/istwa.css'
export default function Istwa() {
    let list=JSON.parse(localStorage.getItem('list'))
        const { tit }=useParams()
        console.log(tit)
        const truncat = (string, length, ) => {
            return string.length < length ? string : string.substring(0, length) 
        }


        
    
  return (
    <div>
                
        <div className="card-category-1">
            
            <div className="basic-card basic-card-aqua">

                <div className="card-content">
                    {list
                    .map((all,key)=>{
                        if(all.tit===tit){
                            return <div key={key}>
                            <span  className="card-title">Title: {all.tit}</span>
                            <p className="card-text">{all.istwa}</p>
                            <div className="card-link">
                            <li title={truncat(all.user,5)}><span>{truncat(all.user,5)}</span></li>
                            </div>
                            </div>
                        }
                    })}
                    
                </div>
        </div>
        </div>

        
        {/* <div className="min-h-screen w-full bg-gray-300">
            <div className="max-w-screen-md mx-auto px-10 pt-20">
                <div className="bg-white md:h-48 rounded-lg shadow-md flex flex-wrap flex-col-reverse md:flex-col">
                    
                        {list
                       .map((all,key)=>{
                        console.log("m nan map")
                        if(all.tit===tit)
                        {
                            return <div className="w-full md:w-1/2 p-4" key={key}>
                           
                                <h3 className="text-3xl font-bold">Titre: {all.tit}</h3>
                                <p>{all.istwa}</p>
                            </div>}
                            }
                        )}
                        
                    </div>
                </div>
            </div> */}
    </div>
  )
}
