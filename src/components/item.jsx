import React from 'react';

const Item = (props) => {
  // const handleBuyClick = (event) => {
  //   console.log(event)
  //   // console.log(`${event.target.value} Buy button clicked`);
  // };

  return (
    <div>
      <li className='list-group-item' style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {props.item}
        <button style={{ float: "right" }} className='btn btn-primary' onClick={()=> console.log(`${props.item}`)}>
          Buy
        </button>
      </li>
    </div>
  );
};

export default Item;
