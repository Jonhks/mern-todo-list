import { useEffect, useState} from 'react'
import axios from 'axios'
import './scss/app.scss';

import Form from './components/Form';
import TodoItem from './components/TodoItem';

function App() {

  const [itemText, setItemText] = useState('');
  const [listItems, setListItems] = useState([]);
  const [isUpdating, setIsUpdating] = useState(' ');
  const [updateItemText, setUpdateItemText] = useState(' ');
  
  const addItem = async e => {
    e.preventDefault()
    if (itemText.trim().length === 0) return;
    try { 
      const res = await axios.post('http://localhost:5500/api/item', {item: itemText})
      setListItems(prev => [...prev, res.data]);
      console.log(res.data)
      setItemText(' ')
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(()=>{
    const getItemList = async () => {
      try {
        const res = await axios.get('http://localhost:5500/api/items')
        res.data.reverse()
        setListItems(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getItemList();
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

  const renderUpdateForm = () => (
    <form className='update-form' onSubmit={e => updateItem(e)}>
      <input id='update-item' className='update-new-input' type="text" placeholder='New Item' value={updateItemText} onChange={e => setUpdateItemText(e.target.value)} />
      <button id='btn-update-item' className='update-new-btn' type='submit'>Update</button>
    </form>
  )

  return (
    <div className="App">
      <h1 className="title">Todo list</h1>
      <div className="todo-listItems">
        <Form 
          addItem={addItem} 
          itemText={itemText} 
          setItemText={setItemText}
        />
       {
         listItems.map(item => (
          <TodoItem 
            key={item._id}
            item={item} 
            isUpdating={isUpdating} 
            renderUpdateForm={renderUpdateForm}
            setIsUpdating={setIsUpdating} 
            deleteItem={deleteItem} 
          />
         ))
       }
      </div>
    </div>
  );
}

export default App;
