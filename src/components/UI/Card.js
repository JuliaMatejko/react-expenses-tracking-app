import "./Card.css";

function Card(props) {
  const classes = "card " + props.className; // adding whatever class we recive from the parent component to the default class 'card'
  return <div className={classes}>{props.children}</div>; // using special props property props.children - to expose value of the content between opening and closing tag
}

export default Card;
