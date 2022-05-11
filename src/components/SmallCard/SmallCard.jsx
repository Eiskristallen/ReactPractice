import React, { useState } from 'react'
import './SmallCard.css'
import {motion, AnimateSharedLayout } from 'framer-motion';
import { CircularProgressbar } from 'react-circular-progressbar';
import {UilTimes} from '@iconscout/react-unicons'
import 'react-circular-progressbar/dist/styles.css'
import Chart from 'react-apexcharts'
 const SmallCard = (props) => {
   //use to control expansion of small cards
   const [expanded,setExpanded] = useState(false);
  return (
    // <div className='smallCard'>child</div>
    <AnimateSharedLayout>
      {
        expanded? (<ExpandedCard param={props} setExpanded={()=>setExpanded(false)}/>):(<CompactCard param = {props} setExpanded={()=>setExpanded(true)}/>)
      }
    </AnimateSharedLayout>
  )
}
//expanded card
function ExpandedCard({param,setExpanded}){
  //define data for area chart
  const data = {
    options:{
      chart:{
        type:'area',
        height:'auto',
      },
      dropShadow:{
        enable:false,
        enableOnSeries:undefined,
        top:0,
        left:0,
        blur:3,
        color:'#000',
        opacity:0.35,
      },
      fill:{
        colors:["#fff"],
        type:'gradient',
      },
      dataLabels:{
        enable:false,

      },
      stroke:{
        curve:'smooth',
        colors:['white']
      },
      tooltip:{
        x:{
          format:'dd/MM/yy HH:mm'
        }
      },
      grind:{
        show:true
      },
      xaxis:{
        type:'datetime',
        categories:[
          '2022-01-02T00:00:00.00Z',
          '2022-01-02T01:30:00.00Z',
          '2022-01-02T02:30:00.00Z',
          '2022-01-02T03:30:00.00Z',
          '2022-01-02T04:30:00.00Z',
          '2022-01-02T05:30:00.00Z',
          '2022-01-02T06:30:00.00Z',
        ]
      }
    }
  }
  return(
    <motion.div className='ExpandedCard'
    style={{
      background:param.color.backGround,
      boxShadow:param.color.boxShadow
    }}
    layoutId='expandableCard'>
      <div  style={{
            alighSelf:'flex-end',cursor:'pointer',color:'white'
          }}>
        <UilTimes onClick={setExpanded}
        />
      </div>
      <span>
        {param.title}
      </span>
      <div className='chartContainer'>
       <Chart series={param.series} type='area' options={data.options}/>
      </div>
      <span>
        Last 24 hours
      </span>
    </motion.div>
  )
}

//compact card
function CompactCard({param,setExpanded}){
  const Png = param.png;
  return (
    <motion.div className='CompactCard'
    style={{
      background: param.color.backGround,
      boxShadow:param.color.boxShadow
    }}
    onClick={setExpanded}
    layoutId='expandableCard'>
      <div className='radialBar'>
        <CircularProgressbar
          value={param.barValue}
          text={`${param.barValue}%`}
        />
        <span>{param.title}</span>
      </div>
      <div className='detail'>
        <Png/>
        <span>${param.value}</span>
        <span>Last 24 hours</span>
      </div>
    </motion.div>
  )
}
export default SmallCard;
