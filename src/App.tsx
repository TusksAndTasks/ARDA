import React, { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage';
import PersonalCabinet from './components/PersonalCabinet';
import Header from './components/Header';
import Footer from './components/Footer';
import { useSelector } from 'react-redux';
import { GlobalState } from './redux/store';
import { rolesEnum } from './redux/slices/rolesSliceTypes';

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const userRole = useSelector((state: GlobalState) => state.roles.role);

  return (
    <>
      <Header setIsPopupOpen={setIsPopupOpen} />
      <Routes>
        <Route
          path="/"
          element={<MainPage isPopupOpen={isPopupOpen} setIsPopupOpen={setIsPopupOpen} />}
        ></Route>
        <Route
          path="cabinet/*"
          element={
            userRole === rolesEnum.NONAUTHORIZED ? (
              <Navigate to="/" replace={true} />
            ) : (
              <PersonalCabinet />
            )
          }
        ></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
