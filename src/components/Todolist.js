import React,{useState,useEffect} from 'react';
import CreateTars from '../createTask/CreateTars';
import Cards from './Cards';
const Todoliist= ()=>{
    const [modal, setModal] = useState(false);
    const[taskList,setTaskList] = useState([])

    useEffect((obj) => {
    let arr = localStorage.getItem("taskList")
    if(obj){
        let obj = JSON.parse(arr)
        setTaskList(obj)
    }
    }, [])

    const deleteTask = (index)=>{
        let tempList = taskList
        tempList.splice(index,1)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
       
    }

    const toggle = ()=>
        setModal(!modal);

        const saveTask = (taskobj) => {
         let tempList = taskList
         tempList.push(taskobj)
         localStorage.setItem("taskList", JSON.stringify(tempList))
          setModal(false)
          setTaskList(taskList)
        }


       
    
    return(
     <>
        <div className='header text-center' >
        <h2 >cards</h2>
        <button className='btn btn-primary mt-2' onClick={()=>setModal(true)}>create task</button>
        </div>

        <div className='taskcontainer'>
            {taskList && taskList.map((obj,index)=> <Cards taskobj = {obj} index= {index} deleteTask={deleteTask}/>
            )}
        </div>

        <CreateTars toggle={toggle} modal= {modal}  save={saveTask}/>
        </>
    )
}

export default Todoliist;