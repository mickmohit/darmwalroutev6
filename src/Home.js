import React from 'react'
import {NavLink, Outlet} from 'react-router-dom'
import Header from './component/Header'

export const Home = () => {
  return (
    <>
      <Header/>

      <Outlet/>   {/* shared and nested routing, it will help in showing about header component in all child routing from app.js */}
    </>
  )
}
