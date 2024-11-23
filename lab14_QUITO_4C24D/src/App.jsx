import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage'

import './App.css'
import { AppProvider } from './contexts/AppContext';
import HomePage from './pages/HomPage';
import CategoryPage from './pages/CategoryPage';
import CategoryFormPage from './pages/CategoryFormPage';
import CategoryEditFormPage from './pages/CategoryEditFormPage';
import SeriePage from './pages/SeriePage';
import SerieFormPage from './pages/serie/SerieFormPage';
import SerieEditFormPage from './pages/serie/SerieEditFormPage';

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/categories" element={<CategoryPage/>}/>
        <Route path="/categories/new" element={<CategoryFormPage />} />
        <Route path="/categories/edit/:id" element={<CategoryEditFormPage/>} />
        <Route path="/series" element={<SeriePage/>}/>
        <Route path="/series/new" element={<SerieFormPage/>}/>
        <Route path="/series/edit/:id" element={<SerieEditFormPage/>}/>
        

      </Routes>
    </AppProvider>
    </BrowserRouter>
  );
}

export default App
