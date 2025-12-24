import React from 'react'
import Header from '../common/Header'
import Home from './Home'
import { DataPages } from '../data/datadummy'
import Footer from '../common/Footer'
import Coponent from '../../Untitled-1'
const HomePage = () => {
  return (
    <>
        <Header/>
        {DataPages.map((item,i) => (
            <Home launch={item.launch} txt={item.txt} title={item.title} btn={item.button} video={item.video} desktop={item.desktop} mobile={item.mobile}/>
        ))}
        
      
        
        
        <Coponent/>
        
        
    </>
  )
//<Footer/>
}

export default HomePage

