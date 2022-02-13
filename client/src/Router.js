import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import ListsPage from './pages/ListsPage';
import { Sidebar } from './components/Sidebar';

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={ <HomePage /> } />
            <Route path='/about' element={ <AboutPage /> } />
            <Route path='/lists' element={ <ListsPage /> } />
        </Routes>
        <Sidebar />
    </BrowserRouter>
  );
};

export default Router;
