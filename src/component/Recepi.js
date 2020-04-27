import React from 'react'
import style from '../css/recepi.module.css'

const Recepi =({title,image,calories })=>{
    return (
        <div className={style.singlerecepi}>
            <h1>{title}</h1>
            <h5>{calories}</h5>
            <img src ={image}></img>
        </div>
    )
}
export default Recepi;