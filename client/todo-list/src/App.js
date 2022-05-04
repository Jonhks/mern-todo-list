import { useEffect, useState} from 'react'
import axios from 'axios'
import './scss/app.scss';

function App() {

  const [itemText, setItemText] = useState('');
  const [listItems, setListItems] = useState([]);
  const [isUpdating, setIsUpdating] = useState(' ');
  const [updateItemText, setUpdateItemText] = useState(' ');
  
  const addItem = async e => {
    e.preventDefault()
    try { 
      const res = await axios.post('http://localhost:5500/api/item', {item: itemText})
      setListItems(prev => [...prev, res.data]);
      console.log(res)
      setItemText(' ')
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(()=>{
    const getItemList = async () => {
      try {
        const res = await axios.get('http://localhost:5500/api/items')
        setListItems(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getItemList()
  },[]);

  const deleteItem = async id => {
    try { 
      const res = await axios.delete(`http://localhost:5500/api/item/${id}`);
      const newListItems = listItems.filter(item => item._id !== id);
      setListItems(newListItems);
      console.log(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  const updateItem = async (e) =>{
    e.preventDefault()
    try {
      const res = await axios.put(`http://localhost:5500/api/item/${isUpdating}`,{item: updateItemText })
      console.log(res.data);
      const updatedItemIndex = listItems.findIndex(item => item._id === isUpdating);
      const updatedItem = listItems[updatedItemIndex].item = updateItemText;
      setUpdateItemText(' ');
      setIsUpdating(' ');
    } catch (error) {
      
    }
  }

  const renderUpdateForm = () =>(
    <form className='update-form' onSubmit={e => updateItem(e)}>
      <input className='update-new-input' type="text" placeholder='New Item' value={updateItemText} onChange={e => setUpdateItemText(e.target.value)} />
      <button className='update-new-btn' type='submit'>Update</button>
    </form>
  )

  return (
    <div className="App">
      <h1 className="title">Todo list</h1>
      <form className="form" onSubmit={e => addItem(e)}>
        <input 
          className="input-item"
          type="text" 
          placeholde="Add Todo Item"
          value={itemText}
          onChange={
            e => setItemText(e.target.value)
          }
        />
        <button className="btn-submit" type="submit">Add</button>  
      </form> 
      <div className="todo-listItems">
       {
         listItems.map(item => (
          <div key={item._id} className="todo-item">
            {
              isUpdating === item._id 
              ? renderUpdateForm()
              : <>
                  <p  className="item-content">{item.item}</p>
                  <button 
                    className="update-item"
                    onClick={(e) => {
                      e.preventDefault()
                      setIsUpdating(item._id)
                    }}
                  >
                    Update
                  </button>
                  <button 
                    className="delete-item"
                    onClick={() => deleteItem(item._id)}
                  >
                    Delete
                  </button>
              </>
            }
          </div>
         ))
       }
      </div>
    </div>
  );
}

export default App;
