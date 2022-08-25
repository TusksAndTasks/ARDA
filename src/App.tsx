import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage';
import PersonalCabinet from './components/PersonalCabinet';

function App() {
  return (
    <>
      <nav>
        <Link to="/">To Main</Link>
        <Link to="cabinet">To Cabinet</Link>
      </nav>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="cabinet/*" element={<PersonalCabinet />}></Route>
      </Routes>
    </>
  );
}

export default App;
