import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/ReactToastify.css'

function MainLayout() {
  return (
    <>
        <NavBar />
        <Outlet />
        <ToastContainer />
    </>
  )
}

export default MainLayout
