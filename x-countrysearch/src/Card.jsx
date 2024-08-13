import React from "react"
import styles from "./Card.module.css"


const Card = ({image,name}) =>{
    return <div className="countryCard">
        
        
        <div  className={styles.countryCard} >
        <img src={image} alt="not found" className={styles.image}/>
        <p >{name}</p>
    </div>

    </div>
}


export default Card;