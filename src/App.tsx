import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage';
import PersonalCabinet from './components/PersonalCabinet';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="cabinet/*" element={<PersonalCabinet />}></Route>
      </Routes>
    </>
  );
}

export default App;
