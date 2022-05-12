//rafce new react arrow function abbr 
import React from 'react'
import './Card.css'
import { CardsData } from '../../Data/Data'
import  SmallCard  from '../SmallCard/SmallCard'
//this card component is constitute by three small cards
//each of those small card gonna be independent div 
const Card = () => {
  return (
    <div className='Cards'>
    {CardsData.map((card,id)=>{
        return(
          //card is card component inside the big card at top of middle dashboard
          <div className='parentContainer' key={id}> 
            <SmallCard 
            title={card.title}
            color={card.color}
            barValue={card.barValue}
            value={card.value}
            png={card.png}
            series={card.series}
            />
          </div>
        )
    })}
    </div>
  )
}

export default Card

