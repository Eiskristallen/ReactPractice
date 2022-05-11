import React from 'react'
import Chart from 'react-apexcharts';
const CustomerReview = () => {
  const data = {
    series:[
      {
        name:"Review",
        data:[10,50,30,80,40,140,200]
      }
    ],
    options:{
      chart:{
        type:'area',
        height:'auto',
      },
      // dropShadow:{
      //   enable:false,
      //   enableOnSeries:undefined,
      //   top:0,
      //   left:0,
      //   blur:3,
      //   color:'#000',
      //   opacity:0.35,
      // },
      fill:{
        colors:["#fff"],
        type:'gradient',
      },
      dataLabels:{
        enable:false,

      },
      stroke:{
        curve:'smooth',
        colors:['#ff929f']
      },
      tooltip:{
        x:{
          format:'dd/MM/yy HH:mm'
        }
      },
      grind:{
        show:false
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
      },
      yaxis:{
        show:false
      },
      toolbar:{
        show:false
      }
    }
  }
  return (
    <div className='CustomerReview'>
      <Chart series={data.series} options={data.options} type='area'/>
    </div>
  )
}

export default CustomerReview