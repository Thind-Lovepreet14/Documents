import React from 'react';

export default function CartItem({item,value}){
  const {id,title,img,price,total,count} = item;
  const {increment,decrement,removeItem} = value;
  return(
    <React.Fragment>
      <tr>
        <td> <img src={img} style={{width:"5rem",height:"5rem"}}/> </td>
        <td>{title}</td>
        <td>{price}</td>
        <td className="mx-auto">
          <span onClick={() =>decrement(id)} className="btn btn-md btn-outline-warning"> <i className="fas fa-minus-circle"></i></span>
          <span className="btn btn-md ">{count}</span>
          <span onClick={() =>increment(id)} className="btn btn-md btn-outline-success"><i className="fas fa-plus-circle"></i></span>
        </td>
        <td>
         <span onClick={() =>removeItem(id)} className="btn btn-md btn-outline-danger"><i className="fas fa-trash"></i></span>
        </td>
        <td><i className="fas fa-dollar-sign"></i> {total}</td>
      </tr>
    </React.Fragment>

  )
}
