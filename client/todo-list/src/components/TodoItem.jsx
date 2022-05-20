

const TodoItem = (props) => {
  const {item, isUpdating, renderUpdateForm, setIsUpdating, deleteItem} = props;
  return (
    <div key={item._id} className="todo-item">
    {
      isUpdating === item._id 
      ? renderUpdateForm()
      : <>
          <p data-testid="itemName" className="item-content">{item.item}</p>
          <button 
            className="update-item"
            id="edit-todo-buttom"
            onClick={(e) => {
              e.preventDefault()
              setIsUpdating(item._id)
            }}
          >
            Update
          </button>
          <button 
            id="delete-todo-buttom"
            className="delete-item"
            onClick={() => deleteItem(item._id)}
          >
            Delete
          </button>
        </>
      }
    </div>
  )
}

export default TodoItem;