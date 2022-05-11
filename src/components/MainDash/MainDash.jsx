import React from "react";
import Card from '../Card/Card'
import './MainDash.css';
import Table from "../Table/Table";
const MainDash = ()=>{
  return (
    <div className="mainDash">
      <h1>Dash Board</h1>
      <Card/>
      <Table/>
    </div>
  )
}

export default MainDash;