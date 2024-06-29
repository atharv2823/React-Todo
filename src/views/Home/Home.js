import "./Home.css"
import send from "./send.png"
import TodoCards from "./../../components/TodoCards/TodoCards"
import { useState } from "react"
import toast, {Toaster} from "react-hot-toast"

function Home() {


    const [todoList , setTodoList] = useState ([])

    const [newTask ,SetNewTask] = useState ("")
    return (
        <>
            <h1 className="app-title">Todo-App 📝</h1>

            <div className="todo-app-container">
                {todoList.map((todoItem , i)=><TodoCards key={i} todoItem={todoItem}/>)}    

                {
                    todoList.length === 0 ?
                    <p style={{textAlign: "center", fontSize:"20px"}}>
                    Todo List is empty
                </p>
                :
                null
                }

                
                
            </div>

            <div className="todo-input-container">
                <input
                 type="text"
                 placeholder="Add To List"
                 className="Input-container"
                 value={newTask}
                 onChange={(e)=>SetNewTask(e.target.value)}
                  />



                <img 
                src={send} 
                className="send" 
                alt="send"
                onClick={()=>{
                        if (newTask=== ""){
                            toast.error("Please Enter a Task")
                            return
                        }


                    setTodoList([...todoList , newTask])
                    SetNewTask("")
                    toast.success("Task Added")
                }}
               
                 />
            </div>
            <Toaster/>

        </>
    )
}

export default Home