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
            <Home launch={item.launch} 
            Element={item.element ? (
              <table>
                <thead>
                  <tr>
                    <td >Plantation</td>
                    <td >Agriculture</td>
                    <td >Horticulture</td>
                  </tr>
                  <tr>
                    <td >Mineral Exploration</td>
                    <td >Mining</td>
                    <td >Defense</td>
                  </tr>
                  <tr>
                    <td >Infrastructure development</td>
                    <td >Infrastructure monitoring</td>
                    <td >Internal security</td>
                  </tr>
                  <tr>
                    <td >Commodities Trading</td>
                    <td >Timber / logging industry</td>
                    <td >Shipping</td>
                  </tr>
                  <tr>
                    <td >Survey & Disaster Management</td>
                    <td >City / municipality management</td>
                    <td >Regional planning</td>
                  </tr>
                  <tr>
                    <td >Township development</td>
                    <td >Remote monitoring of sites in 3D</td>
                    <td >Logistics</td>
                  </tr>
                </thead>
              </table>
            ) : null}
            txt={item.txt} title={item.title} video={item.video} desktop={item.desktop} mobile={item.mobile}
              
              />
        ))}
        
      
        
        
        <Coponent/>
        
        
    </>
  )
//<Footer/>
}

export default HomePage



