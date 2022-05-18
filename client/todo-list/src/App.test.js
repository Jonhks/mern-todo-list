import { render, screen } from '@testing-library/react';
import axios from 'axios';
import App from './App';

jest.mock('axios');

test('renders learn react link', () => {
  render(<App />);
  const title = screen.getByText(/Todo list/i);
  expect(title).toBeInTheDocument();
});

 
test('should get items', () => { 
  axios.get.mockReturnValueOnce({
    data: {
      item: "prueba"
    }
  })
 })

 test('should delete todo', () => { 
   axios.delete.mockReturnValueOnce({
     data:{
       item: "prueba"
     }
   })
  })

 test('should add todo', () => { 
   axios.put.mockReturnValueOnce({
     data:{
       item: "prueba"
     }
   })
  })

