
// import Layout from "./layout";
import { Link } from 'react-router-dom'
import '../css/home.css'

export default function Home(props){
    const truncat = (string, length, ) => {
        return string.length < length ? string : string.substring(0, length) 
    }

    const truncat2 = (string, length, end="...") => {
        return string.length < length ? string : string.substring(0, length) +end
    }
    
    let list=JSON.parse(localStorage.getItem('list'))
    
    function limite(str, limit, end) {

        limit = (limit)? limit : 100;
        end = (end)? end : '...';
        str = str.split(' ');
        
        if (str.length > limit) {
          var cutTolimit = str.slice(0, limit);
          return cutTolimit.join(' ') + ' ' + end;
        }

        return str.join(' ');
      }
      let swiitch

      if(list){
        for(let i of list){

            if(i.statut!==""){
                swiitch =  list.map((el,key)=>{
                    if(el.status==='visible')
                    {
                        return <>
                        <div className="card" key={key}>
                    <div className="box">
                        <div className="content">
                            <span style={{color:'white'}}>#{key}</span>
                            <h4 style={{color:'white'}}>Author: {el.user}</h4>
                            <h4 style={{color:'white'}}>Tittle: {truncat2(el.tit,8)}</h4>
                            <p>{limite(el.istwa,3)}</p>

                            <li><Link to={`/stori/read/${el.tit}`}>Read More</Link> </li>
                        </div>
                    </div>
                </div>
                        
                        </>
                    
                    }
                    
                    })
            }else{
                console.log('kk voye')
            }
          }
      }
    return(
        <div>
            <div className="container">
                
                {swiitch}
        
            </div>
        
        </div>
    )
}