import React from "react";
import "./ImageCard.css";

const ImageCard = props => (
    <div className="card">
        <div className="img-container">
        <img onClick= {() => props.handleOnClick(props.id)}alt={props.name} src={props.image} />
        </div>
    </div>
)

export default ImageCard;