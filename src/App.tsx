import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage';
import PersonalCabinet from './components/PersonalCabinet';
import Header from './components/Header';
import Footer from './components/Footer';
import { useSelector } from 'react-redux';
import { GlobalState } from './redux/store';
import { rolesEnum } from './redux/slices/rolesSliceTypes';

function App() {
  const userRole = useSelector((state: GlobalState) => state.roles.role);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
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
