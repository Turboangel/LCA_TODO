import { useState } from "react";

function Todoproject (){
    const[task,settask] = useState([])
    const[newtask,setnewtask]= useState("")
    const[progress,setprogress]=useState("pending")

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
    const updatedtask = ("in progress")
    settask(updatedtask)
 
 }
 return(
    <div className="Todoproject">
    <h1>How To Prepare Eba </h1>
    <div>
        <input type="text"
            placeholder="Add your task here"
            value={newtask}
            onChange={inputtask}
        />
        <button className="addbutton" onClick={addtask}>
            
        </button>
    </div>
    <ol>
        {task.map((task,index)=> 
        <li key={index}>
            <p className="">{task}</p>
          <button className="" onClick={()=>deletetask(index)}>Done</button>
          <button className="" onClick={()=>inprogress(index)}>in progress</button>
        </li>
        )}
    </ol>
    </div>
 )
}
export default Todoproject