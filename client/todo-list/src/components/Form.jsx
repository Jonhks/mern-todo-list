

const Form = ({addItem, itemText, setItemText}) => {
  return(
    <form className="form" onSubmit={e => addItem(e)}>
      <input 
        name="Add Todo item"
        className="input-item"
        type="text" 
        placeholder="Add Todo Item"
        id="add-todo-item"
        value={itemText}
        onChange={
           e => setItemText(e.target.value)
        }
       />
      <button className="btn-submit" type="submit">Add</button>  
      </form> 
    )
}

export default Form;