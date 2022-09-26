const MealItem = (props) => {
  return (
    <li>
      <div>
        <h3>{props.name}</h3>
        <p>{props.intro}</p>
        <p>{props.price}</p>
      </div>
      <div>
        <h3>Amount</h3>
        <input type='number' />
        <button>+ Add</button>
      </div>
    </li>
  );
};

export default MealItem;
