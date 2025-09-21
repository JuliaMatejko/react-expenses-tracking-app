//import React from 'react';    //not necessary in the newest version of react. Need to use import in every component in older versions whre JSX code is used

import './Card.css';

function Card(props) {
    const classes = 'card ' + props.className; // adding whatever class we recive from the outside
    return <div className={classes}>{props.children}</div>; //using special props property props.children - to expose value of the content between opening and closing tag 
                                                        // now Card can be used as parent elemnt for onther elements
}

export default Card;

//Composition

//We compose ExpenseItem and Expenses component, by using Card as a wrapper