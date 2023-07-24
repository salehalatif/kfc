import React from "react";

export default function KfcCard(props) {
  return (
    <div className="col mb-4">
      <div className="card">
        <img id={props.item.id} src={props.item.img} classNameName="card-img-top" alt=".../" />
        <div className="card-body">
          <h5 className="card-title">{props.item.title}</h5>
          <p className="card-text">{props.item.description}</p>
          <p classNameName="card-price">{props.item.price} </p>
        </div>
      </div>
    </div >
  );
}
