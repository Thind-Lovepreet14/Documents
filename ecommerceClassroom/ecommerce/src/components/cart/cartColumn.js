import React from 'react';

export default function CartColumn() {
  return(
<div className="container-fluid">
<table className="table table-bordered table-hover table-striped">
  <thead className="bg-light">
    <tr>
      <th scope="col">Product</th>
      <th scope="col">Name</th>
      <th scope="col">Price</th>
      <th scope="col">Quantity</th>
      <th scope="col">Remove</th>
      <th scope="col">Total</th>
    </tr>
  </thead>
</table>
</div>
 )
}
