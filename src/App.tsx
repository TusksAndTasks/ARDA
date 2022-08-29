import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage';
import PersonalCabinet from './components/PersonalCabinet';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <>
      <Header setIsPopupOpen={setIsPopupOpen} />
      <Routes>
        <Route
          path="/"
          element={<MainPage isPopupOpen={isPopupOpen} setIsPopupOpen={setIsPopupOpen} />}
        ></Route>
        <Route path="cabinet/*" element={<PersonalCabinet />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
