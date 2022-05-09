import React,{useState} from 'react';
import './Sidebar.css'
import Logo from '../../imgs/logo.png'
import { SidebarData } from '../../Data/Data';
import {UilSignOutAlt} from '@iconscout/react-unicons'
const Sidebar = ()=>{
  //selected state for menuitem
  const [selected,setSelected]=useState(0);
  return (
    <div className='Sidebar'>
      {/* logo */}
      <div className='logo'>
        <img src={Logo} alt='Logo'/>
        <span>
          Sh<span>o</span>ps
        </span>
      </div>
      {/* menu */}
     <div className='menu'>
      {SidebarData.map((item,index)=>{
        return (
          //if the menuitem is being selected then assign active class
          <div className={selected===index?'menuItem active':'menuItem'} key={item.heading}
          onClick={()=>setSelected(index)}>
            <item.icon/>
            <span>
              {item.heading}
            </span>
          </div>
        )
      })}
      {/* signout */}
      <div className='menuItem' key={"signOut"}>
        <UilSignOutAlt/>
      </div>
     </div>
    </div>
  )
}
export default Sidebar;