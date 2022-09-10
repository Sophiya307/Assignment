import react,{useState} from 'react'
import  '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './Task.css';
import { FaPlus } from "react-icons/fa";

function App (){
  const [item,setitem]=useState({itemname:""})
  const [list,setList]=useState([])
  const [search,setsearch]=useState("")
  const changeHandle=(e)=>{
    setsearch(e.target.value)
    var name,value;
    name=e.target.name
    value=e.target.value
    setitem({...item,[name]:value})
    }
  const submithandle=(e)=>{
    e.preventDefault()
    setList([...list,item])
  }
  
  return( 
    <>
    <form onSubmit={submithandle} className="App" >
       <div className='row justify-content-center'>
          <h1 style={{color:"white"}}>Task</h1>
             <input name="itemname" type="search" placeholder="Search..."  className='form-control col-md-6 m-3'
                value={item.itemname} onChange={changeHandle} ></input>
             <button  className='btn btn-primary col-md-1 m-3'><FaPlus /></button>
       
         {list.filter((val)=>{
            if (search== ""){
              return val
            }else if (val.itemname.toLowerCase().includes(search.toLowerCase()) ){
              return val
            }
            }).map((val)=>{
             return <div style={{color:'white',paddingRight:'34rem'}}><h4>{val.itemname}</h4></div>
            })}
      </div>
    </form>
    </>
  )
 }

export default App;
