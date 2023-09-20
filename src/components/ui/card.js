import './card.css'
import React from 'react';


export default function Card(props){
    const cards = 'card ' + props.className;
    return(
<div className={cards}>
{props.children}
</div>
    );
}