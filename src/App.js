import React from 'react';
import './App.css';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import LandingPage from './Components/LandingPage';
import AddNewPost from './Components/AddNewPost';
import PostView from './Components/PostView';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/postview' element={<PostView />} />
      <Route path='/addpost' element={<AddNewPost />} />
    </Routes>
  </BrowserRouter>
);
}

export default App;
