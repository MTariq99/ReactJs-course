import React from 'react';


function Card(props){
    let badgeText
    if(props.item.openSpots ===0){
        badgeText = "SOLD OUT"
    }else if(props.item.location ==="online"){
        badgeText = "ONLINE"
    }
    return (

    <div className='card'>
       {badgeText && <div className='card--badge'>{badgeText}</div>}
    <img className='img' src={props.item.coverImage} />
    <div className='card-stats'>
    <i class="fa-solid fa-star"></i>
    <span>{props.item.stats.rating}</span>
    <span className='gray'>{props.item.stats.reviewCount} .</span>
    <span className='gray'>{props.item.location}</span>
    </div>
    <p className='card-title'>{props.item.title}</p>
    <p  className=' price'><span className='bold'>From {props.item.price}</span> / person</p>
    </div>

    )
}

export default Card;