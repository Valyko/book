import { useEffect } from 'react';
import './App.css';
import Book from './components/book';
import { useDispatch } from 'react-redux';
import { fetchPages } from './store/pages/PagesSlice';

function App() {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(fetchPages())
  }, [dispatch])

  return <Book/>
}

export default App;
