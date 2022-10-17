import './ExpenseItem.css';

function ExpenseItem(){
  return(
    <div className='expense-item'>
      <div>March 21, 2020</div>
      <div className='expense-item__description'>
        <h2>Car Insurance</h2>
        <div className='expense-item__price'>34242 RS.</div>
      </div>
    </div>
  );
}

export default ExpenseItem;