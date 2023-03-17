import React from 'react'
import "../../../../style/dashboard.scss";
import { ProSidebarProvider,Sidebar, Menu, MenuItem,sidebarClasses} from 'react-pro-sidebar';
import Music from './Music';
import TradingOffer from './TradingOffer';
import { useState } from 'react';
export default function UserName() {
       const [isHover, setIsHover] = useState(false);
     
       const handleHover = () =>{
        setIsHover(true)
       }
       const handleLeave = ()=>{
        setIsHover(false)
       }
      
  return (
    <>
      <div className="username">
        <div className="slider-navbar">
          <div className='pro-side'>
        <ProSidebarProvider>
       <Sidebar onMouseEnter={handleHover} onMouseLeave={handleLeave} rootStyles={{
    [`.${sidebarClasses.container}`]: {
        width: isHover? "150px" : "90px",
        height: "1147px",
        background: "#FFFFFF",
        boxShadow: "50px 0px 100px rgba(255, 255, 255, 0.25)",
        borderRadius: "0px 32px 32px 0px",
        position: "fixed",
        transition: "1s"
    },
  }}>
        <Menu>
       
            <MenuItem style={{marginBottom: "30px"}}> <img className='sidebar-pictures' src="/images/cross.png" alt="Cross Picture" /> Home </MenuItem>
            <MenuItem style={{marginBottom: "30px"}}> <img className='sidebar-pictures' src="/images/rounded.png" alt="Circle picture" /> About us</MenuItem>
            <MenuItem style={{marginBottom: "30px"}}> <img className='sidebar-pictures'  src="/images/dots.png" alt="Dots Picture" /> Dashbord </MenuItem>
            <MenuItem style={{marginBottom: "30px"}}> <img className='sidebar-pictures'  src="/images/glasses.png" alt="Glasses Picture" /> Upload</MenuItem>
            <MenuItem style={{marginBottom: "30px"}}> <img className='sidebar-pictures' src="/images/signals.png" alt="Signals Picture" />Analytics</MenuItem>
            <MenuItem style={{marginBottom: "30px"}}> <img className='sidebar-pictures'  src="/images/purse.png" alt="purse Picture" /> Finanace</MenuItem>
            <MenuItem style={{marginBottom: "30px"}}> <img className='sidebar-pictures' src="/images/NFT.png" alt="NFT Logo Picture" />NFT</MenuItem>
       </Menu>
     </Sidebar>
    </ProSidebarProvider>
    </div>
    <div className="username-collection">
      <p className='text-collection'>Username's Collection</p>
      <Music/>
      <TradingOffer/>
    </div>
     <div className="navbar-container">
     <div className="Navbar">          
     <img className='menu-picutre2' src="/images/menu.png" alt="" />
     <div className='men-picture-background'><img className='menu-picutre' src="/images/men.png" alt="" /></div>
     <div className='men-picture-background1'> <span className='seven'>7</span> </div>
    </div>
    <div className="display-mode">
      <div className="mode">
        <img className='star' src="/images/start.png" alt="" /></div> <br />
      <div className="setting">
        <p>
          Settings <br /> <br />
          Profile <br /> <br />
          Artists <br /> <br />
          Log out <br /> <br />
       </p>
      </div>
    </div>
     </div>
    </div>
    
    </div>
    </>
  )
}
