import "./TodoCards.css"
import DelImg from "./trash.png"

function TodoCards({index, task, categories, deleteItem }) {

  const CATEGORY_EMOGI_MAP = {
    Learning: "📚",
    Work: "👩🏻‍💻",
    Personal: "🔒",
    Health: "💪"
  }

  const CATEGORY_COLORS = {
    Learning: "blue",
    Work: "green",
    Personal: "purple",
    Health: "red"
  }

  return (
    <div className='todo-card'>

<img src={DelImg} alt='delete-Image' className='delete' onClick={()=>{deleteItem(index)}}/>
      <span className='task'>{task}</span>


      <span
        className='todo-card-category'
        style={{ backgroundColor: CATEGORY_COLORS[categories] }}>
        {CATEGORY_EMOGI_MAP[categories]}
        {categories}
      </span>
    </div>
  )
}

export default TodoCards