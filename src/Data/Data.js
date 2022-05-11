// Sidebar icons
import{
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
  UilUsdSquare,
  UilMoneyWithdrawal
} from '@iconscout/react-unicons'

import img1 from '../imgs/img1.png'
import img2 from '../imgs/img2.png'
import img3 from '../imgs/img3.png'
/**
 * Sidebar data(in order to make sidebar
 * responsive rather than hard code)
 * if i want make change on heading or icon, I 
 * only need to come here instead edit the component
 */
export const SidebarData=[
  {icon:UilEstate,
  heading:"Dashboard"},
  {icon:UilClipboardAlt,
  heading:"Orders"},
  {icon:UilUsersAlt,
  heading:"Customers"},
  {icon:UilPackage,
  heading:"Products"},
  {icon:UilChart,
  heading:"Analytics"}
];

export const CardsData=[
  {
    title:"Sales",
    color:{
      backGround:'linear-gradient(180deg,#bb67ff 0%,#c484f3 100%)',
      boxShadow:'0px 10px 20px 0px #e0c6f5',

    },
    barValue:70,
    value:'25,970',
    png:UilUsdSquare,
    series:[
      {name:"Sales",
        data:[31,40,28,51,42,109,100],}
    ]
  },
  {
    title:'Revenue',
    color:{
      backGround:'linear-gradient(180deg, #FF919D 0%, #FC929D 100%)',
      boxShadow:'0px 10px 20px 0px #FDC0C7',
    },
    barValue:80,
    value:'14,270',
    png:UilMoneyWithdrawal,
    series:[
      {
        name:"Revenue",
        data:[10,100,50,70,80,30,40]
      }
    ]
  },
  {
    title:'Expenses',
    color:{
      backGround:'linear-gradient(rgb(248,212,154) -146.42%, rgb(255 202 113) -46.42%)',
      boxShadow:'0px 10px 20px 0px #F9D59B',
    },
    barValue:60,
    value:'4,270',
    png:UilClipboardAlt,
    series:[
      {
        name:"Expenses",
        data:[10,25,15,30,12,15,20]
      }
    ]
  }
];
// Recent update card data at right side
export const UpdatesData = [
  {
     img:img1,
     name:'qing',
     noti:'xxx',
     time:'10 hours ago'
  },
  {
    img:img2,
    name:'hrhr',
    noti:'xasdas',
    time:'15 hours ago'
  },
  {
    img:img3,
    name:'xaqq',
    noti:'zcxzzczxx',
    time:'20 hours ago'
  }
]