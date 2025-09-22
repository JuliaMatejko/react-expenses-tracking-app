import "./ExpenseItem.css"; // import css styling
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
  return (
    // JSX code - you must only have oine root elemnt - wrap everything in one div. To improve readability wrap everything also in ()
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
} // use className instead of CSS class (class is reserved name in JS)

export default ExpenseItem;