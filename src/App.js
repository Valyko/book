import { useEffect } from 'react';
import './App.css';
import Book from './components/Book';
import { useDispatch } from 'react-redux';
import { fetchPages } from './store/pages/PagesSlice';

function App() {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(fetchPages())
  })

  return <Book/>
}

export default App;
