import React from 'react'
import { Navbar } from '../components/Navbar'
import { Heroo } from '../components/Hero'
import { Body } from '../components/Body'


export const Home = () => {
  return (
    <div className="m-0 p-0">
        <Navbar />
        <Heroo />
        <Body />
    </div>
  )
}
