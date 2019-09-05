import React from "react";
import "./style.css";

function FriendCard(props) {
  console.log(props)
  console.log(typeof props.removeFriend)
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Occupation:</strong> {props.occupation}
          </li>
          <li>
            <strong>Address:</strong> {props.location}
          </li>
        </ul>
      </div>
      <span onClick={() => props.removefriend(props.id)} className="remove">
          𝘅
      </span>
    </div>
  );
}

export default FriendCard;