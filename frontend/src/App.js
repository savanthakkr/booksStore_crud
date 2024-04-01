import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Search from '../src/components/Search';
import Login from '../src/components/Login';
import AllBook from './components/AllBook';
import AddBook from './components/AddBook';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path='/allBooks' element={<AllBook/>}/>
      <Route path='/addBooks' element={<AddBook/>}/>
      <Route path='/search' element={<Search/>}/>
    </Routes>
  );
}

export default App;
