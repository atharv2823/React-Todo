import "./Home.css"
import send from "./send.png"
import TodoCards from "./../../components/TodoCards/TodoCards"
import { useState, useEffect } from "react"
import toast, {Toaster} from "react-hot-toast"
import Swal from "sweetalert2"

function Home() {


    const [todoList , setTodoList] = useState ([])

    const [newTask ,SetNewTask] = useState ("")

    const [categories , Setcategories] = useState ("")

    useEffect(() => {
        const savedList = localStorage.getItem("todoList")

        if (savedList) {
            setTodoList(JSON.parse(savedList))
        }
    }, [])

    useEffect(() => {
        if (todoList.length === 0) return

        localStorage.setItem("todoList", JSON.stringify(todoList))
    }, [todoList])

    function deleteItem(index) {

        Swal.fire({
            title: "Are You Sure ?",
            text: "You Want To Delete This Item ?",
            icon: "warning",
            showCancelButton: true,
        }).then((result) => {

            if (!result.isConfirmed) {
               return
            }

            else{
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                  });
            }

            const newList = todoList.filter((item, i) => {
                if (i != index) {
                    return true
                }
    
                else {
                    return false
                }
            })
            setTodoList(newList)

            
        })

        
    }



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

                <select className="select" 
                value={categories}
                onChange={(e)=>Setcategories(e.target.value)}
                >
                    <option value="categories">categories</option>
                    <option value="Learning">Learning</option>
                    <option value="Work">Work</option>
                    <option value="Personal">Personal</option>
                    <option value="Health">Health</option>

                </select>

                <img 
                src={send} 
                className="send" 
                alt="send"
                onClick={()=>{
                        if (newTask=== ""){
                            toast.error("Please Enter a Task")
                            return
                        }
                        if (category === "") {
                            toast.error("Category Cannot be empty...")
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