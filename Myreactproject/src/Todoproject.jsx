
import { useState } from "react";
import ReactDOM from 'react-dom/client'

function Todoproject (){
    const[task,settask] = useState([])
    const[newtask,setnewtask]= useState("")
    

    function inputtask(event){
   setnewtask(event.target.value)
    }
 function addtask(){
    if(newtask.trim() !== ""){
        settask(t=> [...t,newtask]);
        setnewtask("")
    }

 }
 function deletetask(index){
  const updatedtask = task.filter((_,i)=>i !== index)
  settask(updatedtask);
 }
 function inprogress (){
    
 }
 return(
    <div className="Todoproject">
    <p className="text-white text-center display-1 text-decoration-underline text-capitalize">Task Recorder</p>
    <div>
        <input type="text" className="p-2 rounded border-0 me-2"
            placeholder="Add your task here"
            value={newtask}
            onChange={inputtask}
        />
        <button className="addbutton p-2 btn-light btn" onClick={addtask}>
           Add 
        </button>
    </div>
    <ol>
        {task.map((task,index)=> 
      <ol key={index} className="d-flex justify-content-center">
            <li className="ms-2 me-4 mt-3 fs-3 text-white">{task}</li>
            <select name="" id="d1"  className=" mt-3 me-3">      
                    <option className="" onInput={()=>deletetask(index)}>Done</option>
          <option className="" onInput={()=>inprogress()}>in progress</option>
    
          </select>
                   <button  onClick={()=>deletetask(index)} className=" mt-2">UPDATE</button>
        </ol>
     
        )}
    </ol>
    </div>
 )
}
export default Todoproject